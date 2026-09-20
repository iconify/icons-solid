import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8ly4y25v.css';
import '../../css/a/av9j2i9ch.css';
import '../../css/l/l2o5xjapr.css';
import '../../css/z/z04drlb1l.css';
import '../../css/a/a4kla9b3w.css';
import '../../css/g/g0ah65brg.css';
import '../../css/e/e1_ummb1z.css';
import '../../css/w/wv6rilbsn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g8ly4y25v"/><path class="av9j2i9ch"/><path class="l2o5xjapr"/><g class="z04drlb1l"><path class="a4kla9b3w"/><path class="g0ah65brg"/><path class="e1_ummb1z"/><path class="wv6rilbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gitlab"} {...others} />);
}

export default Component;
