import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cakywobim.css';
import '../../css/i/iz024ebeq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cakywobim"/><path clip-rule="evenodd" class="iz024ebeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:back-square-filled"} {...others} />);
}

export default Component;
