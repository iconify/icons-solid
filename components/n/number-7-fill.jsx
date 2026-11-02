import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qawi-zbwl {
  fill: currentColor;
  d: path("M16 3a.998.998 0 0 1 .97 1.243l-4 16a.999.999 0 1 1-1.94-.486L14.719 5H8a1 1 0 0 1 0-2Z");
}
</style><path class="qawi-zbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-7-fill"} {...others} />);
}

export default Component;
