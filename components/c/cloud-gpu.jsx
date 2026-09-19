import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psiglkazx.css';
import '../../css/n/ntlr19bwp.css';
import '../../css/c/c6n323zgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="psiglkazx"><path class="ntlr19bwp"/><path class="c6n323zgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-gpu"} {...others} />);
}

export default Component;
