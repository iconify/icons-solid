import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zncae5yka {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v2h-7q-.825 0-1.412.588T11 13v4q0 .825.588 1.413T13 19h7v2zm9-3q-.425 0-.712-.288T12 17v-4q0-.425.288-.712T13 12h4q.425 0 .713.288T18 13v1l2-1.05v4.1L18 16v1q0 .425-.288.713T17 18z");
}
</style><path class="zncae5yka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-outdoor"} {...others} />);
}

export default Component;
