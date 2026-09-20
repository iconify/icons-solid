import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvtem461l.css';
import '../../css/t/tcz9p2b4h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vvtem461l"/><path class="tcz9p2b4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-clone"} {...others} />);
}

export default Component;
