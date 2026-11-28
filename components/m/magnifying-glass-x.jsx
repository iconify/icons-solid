import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt04mfb3z.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="wt04mfb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:magnifying-glass-x"} {...others} />);
}

export default Component;
