import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4-njpbvj.css';
import '../../css/i/ity428tdo.css';
import '../../css/p/pembsco1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l4-njpbvj"/><path class="ity428tdo"/><path class="pembsco1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radio-tower-filled"} {...others} />);
}

export default Component;
