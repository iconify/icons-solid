import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmt8y0odu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmt8y0odu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:peace-sign-solid"} {...others} />);
}

export default Component;
