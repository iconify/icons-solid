import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v14g3abzr {
  fill: currentColor;
  d: path("M16.486 2.143a1 1 0 0 1 1.371.343a1 1 0 0 1-.343 1.371L10.61 8H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.723ZM6 15a3 3 0 1 0 6 0a3 3 0 0 0-6 0m11-3h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-2 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z");
}
</style><path class="v14g3abzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radio-receiver-fill-sharp"} {...others} />);
}

export default Component;
