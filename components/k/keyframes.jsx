import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwmoa0ifm.css';
import '../../css/n/nx8xvejqm.css';
import '../../css/f/f8v8n_bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zwmoa0ifm"/><path class="nx8xvejqm"/><path class="f8v8n_bkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyframes"} {...others} />);
}

export default Component;
