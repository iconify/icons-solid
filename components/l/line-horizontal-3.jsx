import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlhh4ib8x.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="rlhh4ib8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:line-horizontal-3"} {...others} />);
}

export default Component;
