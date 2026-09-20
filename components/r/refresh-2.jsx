import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fznb90gae.css';
import '../../css/h/h3xk7ebgr.css';
import '../../css/s/slj-q6j2r.css';
import '../../css/p/pn1ky7q8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="fznb90gae"/><path class="h3xk7ebgr"/><path class="slj-q6j2r"/><path class="pn1ky7q8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:refresh-2"} {...others} />);
}

export default Component;
