import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3g6p4btc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y3g6p4btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:one-third-rotation"} {...others} />);
}

export default Component;
