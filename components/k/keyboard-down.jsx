import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg0dq4bxe.css';
import '../../css/n/ngz6222nx.css';
import '../../css/w/w-t956ach.css';
import '../../css/m/m6n3r9nnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.28 16.74)" class="sg0dq4bxe"/><rect transform="matrix(0 -1 -1 0 22.28 16.74)" class="ngz6222nx"/><path class="w-t956ach"/><path class="m6n3r9nnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-down"} {...others} />);
}

export default Component;
