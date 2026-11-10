import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/chm-v8b3e.css';
import '../../css/s/ssmicowcj.css';
import '../../css/c/ctem6tbeu.css';
import '../../css/j/jkywunwjt.css';
import '../../css/f/f77j-gbdo.css';
import '../../css/a/aaz9bkb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="chm-v8b3e"/><path class="ssmicowcj"/><path class="ctem6tbeu"/><path class="jkywunwjt"/><path class="f77j-gbdo"/><path class="aaz9bkb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:list-checks"} {...others} />);
}

export default Component;
