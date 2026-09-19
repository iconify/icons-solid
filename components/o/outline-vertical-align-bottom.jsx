import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nygylfb8t {
  fill: currentColor;
  d: path("M16 13h-3V3h-2v10H8l4 4zM4 19v2h16v-2z");
}
</style><path class="nygylfb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-vertical-align-bottom"} {...others} />);
}

export default Component;
