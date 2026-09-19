import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdb8j2bld.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="xdb8j2bld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:joomla"} {...others} />);
}

export default Component;
