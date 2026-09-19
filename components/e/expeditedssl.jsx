import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9b1ifivl.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="a9b1ifivl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:expeditedssl"} {...others} />);
}

export default Component;
