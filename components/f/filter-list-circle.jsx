import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8wr0fzqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8wr0fzqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:filter-list-circle"} {...others} />);
}

export default Component;
