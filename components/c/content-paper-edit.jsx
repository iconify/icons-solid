import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uhdeqebmj.css';
import '../../css/q/qd8r50b_e.css';
import '../../css/o/o6o8_t02x.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uhdeqebmj"/><path class="qd8r50b_e"/><path class="o6o8_t02x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:content-paper-edit"} {...others} />);
}

export default Component;
