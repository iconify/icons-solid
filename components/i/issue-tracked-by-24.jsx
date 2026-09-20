import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaa3sjb5u.css';
import '../../css/t/t949fr4iy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uaa3sjb5u"/><path class="t949fr4iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-tracked-by-24"} {...others} />);
}

export default Component;
