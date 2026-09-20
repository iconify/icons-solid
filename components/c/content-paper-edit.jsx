import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ap80h--mc.css';
import '../../css/z/zvlzs95pz.css';
import '../../css/w/waux7wbcs.css';
import '../../css/g/ghmft6b9j.css';
import '../../css/e/eqcgb6a6t.css';
import '../../css/e/e88av5jxg.css';
import '../../css/i/i994w-oaf.css';
import '../../css/q/qpna9s_xb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ap80h--mc"/><path class="zvlzs95pz"/><path class="waux7wbcs"/><path class="ghmft6b9j"/><path class="eqcgb6a6t"/><path class="e88av5jxg"/><path class="i994w-oaf"/><path class="qpna9s_xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:content-paper-edit"} {...others} />);
}

export default Component;
