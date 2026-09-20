import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpj65fbae.css';
import '../../css/l/lb80qlbob.css';
import '../../css/u/usozxnbrm.css';
import '../../css/a/aqqd_9baf.css';
import '../../css/f/f0ydaq_8s.css';
import '../../css/m/mi2sqytmp.css';
import '../../css/a/aj4q3ybmf.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="hpj65fbae"/><g class="lb80qlbob"><circle class="usozxnbrm"/><path class="aqqd_9baf"/><path class="f0ydaq_8s"/><path class="mi2sqytmp"/><path class="aj4q3ybmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rounded-symbol-for-cai"} {...others} />);
}

export default Component;
