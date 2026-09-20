import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uee3w3bpb.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="uee3w3bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-alt-waxing-crescent-1"} {...others} />);
}

export default Component;
