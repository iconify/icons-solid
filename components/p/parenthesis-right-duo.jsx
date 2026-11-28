import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr22n6bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr22n6bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:parenthesis-right-duo"} {...others} />);
}

export default Component;
