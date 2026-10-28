import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nd_6pg5fd.css';
import '../../css/b/b96iqm-mu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="nd_6pg5fd"/><path class="b96iqm-mu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:video"} {...others} />);
}

export default Component;
