import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/t/touwh4qiv.css';
import '../../css/o/o3s4t6bkh.css';
import '../../css/i/i8y_5tc4i.css';
import '../../css/d/dglhzfijr.css';
import '../../css/b/bnw6d5nlc.css';
import '../../css/o/oibgboowi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="touwh4qiv"/><path class="o3s4t6bkh"/><path class="i8y_5tc4i"/><path class="dglhzfijr"/><path class="bnw6d5nlc"/><path class="oibgboowi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-message"} {...others} />);
}

export default Component;
