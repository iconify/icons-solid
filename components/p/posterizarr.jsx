import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2rf3h_fh.css';
import '../../css/i/ihsb-z63g.css';
import '../../css/k/k8ly4s6je.css';
import '../../css/f/f5yo0i1ul.css';
import '../../css/p/pwlw3xj5o.css';
import '../../css/n/nk78v6dsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2rf3h_fh"/><path class="ihsb-z63g"/><path class="k8ly4s6je"/><path class="f5yo0i1ul"/><path class="pwlw3xj5o"/><path class="nk78v6dsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posterizarr"} {...others} />);
}

export default Component;
