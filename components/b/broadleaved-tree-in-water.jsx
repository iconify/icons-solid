import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy5fcmbjd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jy5fcmbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:broadleaved-tree-in-water"} {...others} />);
}

export default Component;
