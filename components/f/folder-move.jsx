import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efktenb0c.css';
import '../../css/p/p-qjs1mwp.css';
import '../../css/h/h_8zc7bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="efktenb0c"/><path class="p-qjs1mwp"/><path class="h_8zc7bgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-move"} {...others} />);
}

export default Component;
