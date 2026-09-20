import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g21co_blw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g21co_blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:music-rest-half"} {...others} />);
}

export default Component;
