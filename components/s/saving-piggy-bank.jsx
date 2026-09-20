import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z84xh0buz.css';
import '../../css/y/y3ltpce6i.css';
import '../../css/j/j01-b3t0a.css';
import '../../css/l/lz-jyrplx.css';
import '../../css/r/rh61s1a2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="z84xh0buz"/><path class="y3ltpce6i"/><path class="j01-b3t0a"/><path class="lz-jyrplx"/><path class="rh61s1a2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:saving-piggy-bank"} {...others} />);
}

export default Component;
