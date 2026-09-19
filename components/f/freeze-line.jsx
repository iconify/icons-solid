import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/h/hd2q04bbt.css';
import '../../css/r/rp5uxwhwm.css';
import '../../css/i/ilcz-6o8j.css';
import '../../css/f/fsf032_mi.css';
import '../../css/r/rytagcdsw.css';
import '../../css/d/dio7tqfse.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="hd2q04bbt"/><path class="rp5uxwhwm"/><path class="ilcz-6o8j"/><path class="fsf032_mi"/><path class="rytagcdsw"/><path class="dio7tqfse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:freeze-line"} {...others} />);
}

export default Component;
