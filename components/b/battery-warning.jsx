import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab65ey4uu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab65ey4uu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:battery-warning"} {...others} />);
}

export default Component;
