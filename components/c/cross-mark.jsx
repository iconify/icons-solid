import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsp2tpz6a.css';
import '../../css/w/wjbqyhpxe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qsp2tpz6a"/><path class="wjbqyhpxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cross-mark"} {...others} />);
}

export default Component;
