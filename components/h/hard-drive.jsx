import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7m93dboq.css';
import '../../css/a/ajbzltasn.css';
import '../../css/e/eor6kr9ab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7m93dboq"/><path class="ajbzltasn"/><path class="eor6kr9ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-drive"} {...others} />);
}

export default Component;
