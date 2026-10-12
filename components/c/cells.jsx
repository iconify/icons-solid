import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwfi_f95k.css';
import '../../css/w/wtz6csdel.css';
import '../../css/h/hgkmyycuj.css';
import '../../css/k/klldalqrj.css';
import '../../css/d/deoksubma.css';
import '../../css/v/v7-6v1bii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dwfi_f95k"/><path class="wtz6csdel"/><path class="hgkmyycuj"/><path class="klldalqrj"/><path class="deoksubma"/><path class="v7-6v1bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cells"} {...others} />);
}

export default Component;
