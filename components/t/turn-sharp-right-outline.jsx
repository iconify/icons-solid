import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czlvybb7v {
  fill: currentColor;
  d: path("M6.5 20v-5.27q0-.67.472-1.142t1.143-.472h7.77q.269 0 .442-.174q.173-.173.173-.442V5.916l-2.1 2.1l-.708-.708L17 4l3.308 3.308l-.708.708l-2.1-2.1V12.5q0 .671-.472 1.143t-1.144.472H8.116q-.27 0-.443.174q-.173.173-.173.442V20z");
}
</style><path class="czlvybb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-sharp-right-outline"} {...others} />);
}

export default Component;
