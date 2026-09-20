import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ry3duvbiv {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-11.5v7a.5.5 0 0 1-1 0V8.477c-.378.484-.818.92-1.223 1.189a.5.5 0 1 1-.554-.832c.313-.209.711-.6 1.065-1.072s.624-.973.727-1.383A.5.5 0 0 1 11 6.5");
}
</style><path class="ry3duvbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:number-circle-1-20-filled"} {...others} />);
}

export default Component;
