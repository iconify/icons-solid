import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0uxti_oh {
  fill: currentColor;
  d: path("M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8h-8V7h8zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4z");
}

.fd0mx7e0g {
  fill: currentColor;
  d: path("M8 8H6v7c0 1.1.9 2 2 2h9v-2H8z");
}
</style><path class="fd0mx7e0g"/><path class="e0uxti_oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-dynamic-feed"} {...others} />);
}

export default Component;
