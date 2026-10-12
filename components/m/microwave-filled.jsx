import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhjm4i6en.css';
import '../../css/m/mol_khq9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhjm4i6en"/><path clip-rule="evenodd" class="mol_khq9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:microwave-filled"} {...others} />);
}

export default Component;
