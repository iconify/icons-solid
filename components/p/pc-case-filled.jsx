import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s60gkvb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s60gkvb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pc-case-filled"} {...others} />);
}

export default Component;
