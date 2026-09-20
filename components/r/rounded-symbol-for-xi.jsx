import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpj65fbae.css';
import '../../css/l/lb80qlbob.css';
import '../../css/u/usozxnbrm.css';
import '../../css/l/lcckzaciq.css';
import '../../css/j/jmquyybnl.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="hpj65fbae"/><g class="lb80qlbob"><circle class="usozxnbrm"/><path class="lcckzaciq"/><path class="jmquyybnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rounded-symbol-for-xi"} {...others} />);
}

export default Component;
