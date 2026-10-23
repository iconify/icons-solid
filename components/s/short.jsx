import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqx1wrboq.css';
import '../../css/w/wqysgdt-t.css';
import '../../css/b/b7ulpdbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hqx1wrboq"/><path class="wqysgdt-t"/><path class="b7ulpdbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:short"} {...others} />);
}

export default Component;
