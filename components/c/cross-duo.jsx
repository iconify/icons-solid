import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4okflb5a.css';
import '../../css/j/jardiabnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4okflb5a secondary"/><path class="jardiabnv primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cross-duo"} {...others} />);
}

export default Component;
