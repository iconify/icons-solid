import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7_5l5l3y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c7_5l5l3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-beside-oval-broadleaved-tree-above-water"} {...others} />);
}

export default Component;
