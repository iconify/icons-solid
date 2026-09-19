import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt9nwbbay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xt9nwbbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chevron-left-circle"} {...others} />);
}

export default Component;
