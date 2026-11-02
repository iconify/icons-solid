import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekrb82o1y {
  fill: currentColor;
  d: path("m17.707 18.707l-2 2a5.243 5.243 0 0 1-7.414 0l-5-5a5.243 5.243 0 0 1 0-7.414l5-5a5.243 5.243 0 0 1 7.414 0l5 5a5.243 5.243 0 0 1 0 7.414ZM13 9a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm-1 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="ekrb82o1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:diamond-warning-fill-round"} {...others} />);
}

export default Component;
