import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0xspacmf.css';
import '../../css/u/uuypzlbxj.css';
import '../../css/t/teap1u0-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c0xspacmf"/><path class="uuypzlbxj"/><path class="teap1u0-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ticket"} {...others} />);
}

export default Component;
