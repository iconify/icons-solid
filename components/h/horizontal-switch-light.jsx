import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmq22nb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmq22nb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:horizontal-switch-light"} {...others} />);
}

export default Component;
