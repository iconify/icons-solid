import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.syxkevg3z {
  fill: currentColor;
  d: path("M13 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M9 3v8H7a4 4 0 0 1 0-8Zm6 0h2a4 4 0 0 1 0 8h-2ZM9 13v8a4 4 0 0 1 0-8m6 8v-8a4 4 0 0 1 0 8");
}
</style><path class="syxkevg3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-horizontal-fill-round"} {...others} />);
}

export default Component;
