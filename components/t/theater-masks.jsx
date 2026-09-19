import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2hq8bblm.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="g2hq8bblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:theater-masks"} {...others} />);
}

export default Component;
