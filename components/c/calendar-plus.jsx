import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/oh2g-m5tx.css';
import '../../css/b/bkf45ja_z.css';
import '../../css/w/w7yd7qdhf.css';
import '../../css/y/yv1tzmg8u.css';
import '../../css/v/vbiynibwx.css';
import '../../css/w/wap2yzbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="oh2g-m5tx"/><path class="bkf45ja_z"/><path class="w7yd7qdhf"/><path class="yv1tzmg8u"/><path class="vbiynibwx"/><path class="wap2yzbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:calendar-plus"} {...others} />);
}

export default Component;
