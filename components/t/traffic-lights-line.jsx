import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc-w-0b1k.css';
import '../../css/r/rihw2qt5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc-w-0b1k"/><path class="rihw2qt5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:traffic-lights-line"} {...others} />);
}

export default Component;
