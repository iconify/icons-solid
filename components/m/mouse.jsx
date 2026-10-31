import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/k/kynuj-ben.css';
import '../../css/n/n9g49ib_l.css';
import '../../css/r/rnbu82bmn.css';
import '../../css/j/jlkqukbjj.css';
import '../../css/o/oxd-hebhe.css';
import '../../css/i/iz8l7z7di.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="kynuj-ben wm-shadow"/><path class="n9g49ib_l"/><path class="rnbu82bmn"/><path class="jlkqukbjj"/><path class="oxd-hebhe"/><path class="iz8l7z7di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mouse"} {...others} />);
}

export default Component;
