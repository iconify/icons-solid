import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph94jybnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ph94jybnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:refresh-ccw"} {...others} />);
}

export default Component;
