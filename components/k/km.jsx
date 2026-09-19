import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6xehdcza.css';
import '../../css/g/ga8-_ettx.css';
import '../../css/t/t-2wcklaf.css';
import '../../css/z/zyyqb7kmr.css';
import '../../css/p/phn7vybfw.css';
import '../../css/f/f8ashocqa.css';
import '../../css/b/bl9__tbcx.css';
import '../../css/n/nqkn8zi-m.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="h6xehdcza"/><path class="ga8-_ettx"/><path class="t-2wcklaf"/><path class="zyyqb7kmr"/><path class="phn7vybfw"/><circle class="f8ashocqa"/><circle class="bl9__tbcx"/><path class="nqkn8zi-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:km"} {...others} />);
}

export default Component;
