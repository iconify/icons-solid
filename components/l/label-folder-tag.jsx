import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t23qaybdt.css';
import '../../css/v/vqm7h5qoo.css';
import '../../css/q/qknxnksyx.css';
import '../../css/u/u2c83oqqy.css';
import '../../css/w/wv8a__b6p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t23qaybdt"/><path class="vqm7h5qoo"/><path class="qknxnksyx"/><path class="u2c83oqqy"/><path class="wv8a__b6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:label-folder-tag"} {...others} />);
}

export default Component;
