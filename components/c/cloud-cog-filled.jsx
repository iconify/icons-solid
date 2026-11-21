import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkqd60bly.css';
import '../../css/y/y_icihb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xkqd60bly"/><path class="y_icihb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-cog-filled"} {...others} />);
}

export default Component;
