import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt4_61_lr.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vt4_61_lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:chick"} {...others} />);
}

export default Component;
