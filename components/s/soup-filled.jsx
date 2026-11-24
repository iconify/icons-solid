import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w09nt7o0v.css';
import '../../css/h/hkt82pb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w09nt7o0v"/><path class="hkt82pb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:soup-filled"} {...others} />);
}

export default Component;
