import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tua-0ebsr.css';
import '../../css/h/h7kltebkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tua-0ebsr"/><path class="h7kltebkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-left-exit-filled"} {...others} />);
}

export default Component;
