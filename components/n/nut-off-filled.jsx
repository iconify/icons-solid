import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo28_rb7q.css';
import '../../css/a/a67_ne9yr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yo28_rb7q"/><path class="a67_ne9yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:nut-off-filled"} {...others} />);
}

export default Component;
