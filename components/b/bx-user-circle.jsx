import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2kvjdb3j.css';
import '../../css/a/a0a-tm2rn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2kvjdb3j"/><path class="a0a-tm2rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-user-circle"} {...others} />);
}

export default Component;
