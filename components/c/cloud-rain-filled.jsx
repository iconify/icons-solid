import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj1o8w1sa.css';
import '../../css/i/idl12ys4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj1o8w1sa"/><path class="idl12ys4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-rain-filled"} {...others} />);
}

export default Component;
