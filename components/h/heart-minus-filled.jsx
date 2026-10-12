import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikrl6obvt.css';
import '../../css/o/omixov_3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ikrl6obvt"/><path class="omixov_3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heart-minus-filled"} {...others} />);
}

export default Component;
