import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzi7zfbtp.css';
import '../../css/f/fh60u4boo.css';
import '../../css/c/cnio1-a_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tzi7zfbtp"/><path class="fh60u4boo"/><path class="cnio1-a_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:megaphone-16"} {...others} />);
}

export default Component;
