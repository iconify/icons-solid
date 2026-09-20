import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1nqlebzx.css';
import '../../css/l/l7s-_pmfh.css';
import '../../css/m/mol5dxbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k1nqlebzx"/><path class="l7s-_pmfh"/><path class="mol5dxbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:controls-volume-knob"} {...others} />);
}

export default Component;
