import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvr-94mbh.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="wvr-94mbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:phpmyfaq"} {...others} />);
}

export default Component;
