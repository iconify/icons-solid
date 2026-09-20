import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c48s32eie.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c48s32eie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-beside-oval-broadleaved-tree"} {...others} />);
}

export default Component;
