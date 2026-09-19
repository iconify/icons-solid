import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1_gjbm1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1_gjbm1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:guest-height-limit"} {...others} />);
}

export default Component;
