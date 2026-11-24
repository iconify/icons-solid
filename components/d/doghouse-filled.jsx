import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd9s1hbcj.css';
import '../../css/m/m4hvdnqig.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gd9s1hbcj"/><path class="m4hvdnqig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:doghouse-filled"} {...others} />);
}

export default Component;
