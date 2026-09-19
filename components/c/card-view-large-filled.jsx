import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrt9xcbpr.css';
import '../../css/x/xtmnjwu4f.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="wrt9xcbpr"/><path class="xtmnjwu4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:card-view-large-filled"} {...others} />);
}

export default Component;
