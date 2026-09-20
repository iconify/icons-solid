import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fftbt4ikp.css';
import '../../css/z/zuqwdabeh.css';
import '../../css/w/wptgjib0k.css';
import '../../css/j/jo5vtjbfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fftbt4ikp"/><path class="zuqwdabeh"/><path class="wptgjib0k"/><path class="jo5vtjbfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-metaphor-burn-money"} {...others} />);
}

export default Component;
