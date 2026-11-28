import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl5q3r92p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bl5q3r92p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:hospital-plus"} {...others} />);
}

export default Component;
