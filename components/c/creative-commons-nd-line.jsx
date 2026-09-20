import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma5l8hb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ma5l8hb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:creative-commons-nd-line"} {...others} />);
}

export default Component;
