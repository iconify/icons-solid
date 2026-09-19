import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrdd82b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hrdd82b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:google-plus-circle"} {...others} />);
}

export default Component;
