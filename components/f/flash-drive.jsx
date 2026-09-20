import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh0zqjb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mh0zqjb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:flash-drive"} {...others} />);
}

export default Component;
