import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/p/pdttvhrxv.css';
import '../../css/f/fprqcac9y.css';
import '../../css/d/din99669s.css';
import '../../css/x/x1iu_qbxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="pdttvhrxv"/><path class="fprqcac9y"/><path class="din99669s"/><path class="x1iu_qbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:windmill-two"} {...others} />);
}

export default Component;
