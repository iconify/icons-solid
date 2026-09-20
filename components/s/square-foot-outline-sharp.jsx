import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fp16j4y1q {
  fill: currentColor;
  d: path("M4.539 19.462V5.604L7.33 8.396l-.773.773l.469.47l.773-.774l2.139 2.139l-.773.773l.469.47l.773-.774l2.215 2.216l-.773.773l.47.469l.772-.773l2.139 2.138l-.773.773l.469.47l.773-.774l2.696 2.696zM6 18h8.3L6 9.7z");
}
</style><path class="fp16j4y1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:square-foot-outline-sharp"} {...others} />);
}

export default Component;
