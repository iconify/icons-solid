import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhjon3l2n.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="vhjon3l2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:line-horizontal-3-decrease-circle-fill"} {...others} />);
}

export default Component;
