import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjfl23hqz.css';
import '../../css/i/i2hb8p_7k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xjfl23hqz"/><path class="i2hb8p_7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:desktop-download-16"} {...others} />);
}

export default Component;
