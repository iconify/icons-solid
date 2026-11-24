import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcc1i2lqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcc1i2lqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:stroke-width-filled"} {...others} />);
}

export default Component;
