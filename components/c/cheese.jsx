import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpwdembfl.css';
import '../../css/f/fw4-fzb6x.css';
import '../../css/n/n5u1h75-b.css';
import '../../css/j/j4zuf2bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vpwdembfl"/><path class="fw4-fzb6x"/><path class="n5u1h75-b"/><path class="j4zuf2bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cheese"} {...others} />);
}

export default Component;
