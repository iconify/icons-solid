import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3_lo5eyl.css';
import '../../css/o/ok-uoxbmh.css';
import '../../css/q/qonxbbjwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s3_lo5eyl"/><path class="ok-uoxbmh"/><path class="qonxbbjwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-pie-chart"} {...others} />);
}

export default Component;
