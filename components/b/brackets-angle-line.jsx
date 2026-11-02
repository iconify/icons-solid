import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu7x7cbib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qu7x7cbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:brackets-angle-line"} {...others} />);
}

export default Component;
