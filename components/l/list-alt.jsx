import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewkexkzaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ewkexkzaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:list-alt"} {...others} />);
}

export default Component;
