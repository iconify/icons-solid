import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmrz6i3rp.css';
import '../../css/j/jqhbu_boi.css';
import '../../css/e/evtf7tr-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 4.93 1.7)" class="fmrz6i3rp"/><rect transform="matrix(0 1 1 0 4.93 1.7)" class="jqhbu_boi"/><path class="evtf7tr-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tree"} {...others} />);
}

export default Component;
