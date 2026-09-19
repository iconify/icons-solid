import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1by6sb-u.css';
import '../../css/h/hcu_kfy7h.css';
import '../../css/o/opmk2-vlj.css';
import '../../css/q/qzs_3vcvz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s1by6sb-u"/><path class="hcu_kfy7h"/><path class="opmk2-vlj"/><path class="qzs_3vcvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:walking-duo"} {...others} />);
}

export default Component;
