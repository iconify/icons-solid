import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy5vyztkn.css';
import '../../css/a/aek_ptbvy.css';
import '../../css/k/k8c68e47n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sy5vyztkn"/><path class="aek_ptbvy"/><path class="k8c68e47n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sticky-note"} {...others} />);
}

export default Component;
