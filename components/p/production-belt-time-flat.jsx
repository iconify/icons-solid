import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3j_ir1az.css';
import '../../css/z/z99fhbbdv.css';
import '../../css/h/hgjk-obrc.css';
import '../../css/s/sle0b2beh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v3j_ir1az"/><path class="z99fhbbdv"/><path class="hgjk-obrc"/><path clip-rule="evenodd" class="sle0b2beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:production-belt-time-flat"} {...others} />);
}

export default Component;
