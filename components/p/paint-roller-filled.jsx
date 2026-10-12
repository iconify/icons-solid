import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv_oh1bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gv_oh1bhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paint-roller-filled"} {...others} />);
}

export default Component;
