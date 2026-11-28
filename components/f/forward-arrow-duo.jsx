import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9xbjpe9s.css';
import '../../css/i/icurep0mw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9xbjpe9s secondary"/><path class="icurep0mw primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:forward-arrow-duo"} {...others} />);
}

export default Component;
