import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic2ffcbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ic2ffcbfm primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:brace-left-duotone"} {...others} />);
}

export default Component;
