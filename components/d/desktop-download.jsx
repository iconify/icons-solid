import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy6fc6btc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wy6fc6btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:desktop-download"} {...others} />);
}

export default Component;
