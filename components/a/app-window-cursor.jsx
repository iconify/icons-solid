import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgpy_ec8v.css';
import '../../css/y/y44khobgz.css';
import '../../css/j/jr6cypjkl.css';
import '../../css/c/c0kc3m79n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wgpy_ec8v"/><path clip-rule="evenodd" class="y44khobgz"/><path class="jr6cypjkl"/><path class="c0kc3m79n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:app-window-cursor"} {...others} />);
}

export default Component;
