import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-1yh6h8i.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="y-1yh6h8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:optin-monster"} {...others} />);
}

export default Component;
