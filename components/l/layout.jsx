import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bd94bib0r.css';
import '../../css/t/tpna03ban.css';
import '../../css/v/v_0lefbag.css';
import '../../css/h/h_htwe02v.css';
import '../../css/c/czncer2zp.css';
import '../../css/z/zxpyqb9vl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bd94bib0r"/><path class="tpna03ban"/><path class="v_0lefbag"/><path class="h_htwe02v"/><path class="czncer2zp"/><path class="zxpyqb9vl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:layout"} {...others} />);
}

export default Component;
