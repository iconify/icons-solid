import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sr2xf5bcc.css';
import '../../css/h/hhsipccmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="sr2xf5bcc wm-k"/><path class="hhsipccmh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-template-gloss"} {...others} />);
}

export default Component;
