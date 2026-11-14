import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yk4ih1bjn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.25 5.5q0-3.25-3.25-3.25q-1.346 0-2.298.952T3.75 5.5V19q0 2.25 2.25 2.25h12.5q2.25 0 2.25-2.25v-2q0-1.137-.574-1.699q.574-.738.574-2.051q0-1.243-.879-2.121q-.878-.879-2.121-.879h-6q-.879 0-1.5.257z");
}
</style><path class="yk4ih1bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:booster-seat"} {...others} />);
}

export default Component;
