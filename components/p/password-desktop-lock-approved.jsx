import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xl07tt-6b.css';
import '../../css/f/fmam1lxxs.css';
import '../../css/c/ct1flbcol.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xl07tt-6b"/><path class="fmam1lxxs"/><path class="ct1flbcol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:password-desktop-lock-approved"} {...others} />);
}

export default Component;
