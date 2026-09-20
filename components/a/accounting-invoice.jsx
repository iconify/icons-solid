import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g29tunbon.css';
import '../../css/l/l72q2c0ph.css';
import '../../css/d/d8cw6abta.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g29tunbon"/><path class="l72q2c0ph"/><path class="d8cw6abta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:accounting-invoice"} {...others} />);
}

export default Component;
