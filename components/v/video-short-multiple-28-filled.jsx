import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.secz_lbtq {
  fill: currentColor;
  d: path("M22.469 5.229a3.74 3.74 0 0 1 1.529 3.021v11.5a6.25 6.25 0 0 1-6.25 6.25h-7.5a3.74 3.74 0 0 1-3.021-1.53q.256.03.521.03h10a4.75 4.75 0 0 0 4.75-4.75v-14q0-.264-.03-.521M17.75 2a3.75 3.75 0 0 1 3.75 3.75v14a3.75 3.75 0 0 1-3.75 3.75h-10A3.75 3.75 0 0 1 4 19.75v-14A3.75 3.75 0 0 1 7.75 2zm-5.455 6.979A1.5 1.5 0 0 0 10 10.25v4.998a1.5 1.5 0 0 0 2.295 1.272l4-2.498a1.5 1.5 0 0 0 0-2.546z");
}
</style><path class="secz_lbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-short-multiple-28-filled"} {...others} />);
}

export default Component;
