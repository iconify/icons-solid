import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7vqi-5sw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m7vqi-5sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:street-lamp-arm"} {...others} />);
}

export default Component;
