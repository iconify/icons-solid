import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjms-oqvl.css';
import '../../css/v/v2tmeobir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjms-oqvl"/><path class="v2tmeobir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:star-minus-filled"} {...others} />);
}

export default Component;
