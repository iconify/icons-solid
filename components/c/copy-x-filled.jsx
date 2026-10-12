import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjriywbzo.css';
import '../../css/a/acxc33bep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mjriywbzo"/><path class="acxc33bep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:copy-x-filled"} {...others} />);
}

export default Component;
