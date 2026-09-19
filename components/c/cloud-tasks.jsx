import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/m/ma-fq41io.css';
import '../../css/r/r73nhcbta.css';
import '../../css/b/b8ajhnfiy.css';
import '../../css/k/krt7ajb7d.css';
import '../../css/t/tbw13ipea.css';
import '../../css/c/cy4l2vbib.css';
import '../../css/k/k94281wmd.css';
import '../../css/n/nfik59bsr.css';
import '../../css/q/qt7_2s8jz.css';
import '../../css/o/os1t5m9gl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="ma-fq41io"/><path class="r73nhcbta"/><path class="b8ajhnfiy"/><path class="krt7ajb7d"/><path class="tbw13ipea"/><path class="cy4l2vbib"/><path class="k94281wmd"/><path class="nfik59bsr"/><path class="qt7_2s8jz"/><path class="os1t5m9gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-tasks"} {...others} />);
}

export default Component;
