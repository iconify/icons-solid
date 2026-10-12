import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcp8k2ckv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vcp8k2ckv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clipboard-type-filled"} {...others} />);
}

export default Component;
