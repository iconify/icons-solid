import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9e8i8b7d.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="j9e8i8b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:modx"} {...others} />);
}

export default Component;
