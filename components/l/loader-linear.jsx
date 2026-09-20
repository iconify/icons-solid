import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylkgs53ct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ylkgs53ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:loader-linear"} {...others} />);
}

export default Component;
