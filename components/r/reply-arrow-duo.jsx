import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdawh-2am.css';
import '../../css/d/dcxarjboh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdawh-2am secondary"/><path class="dcxarjboh primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:reply-arrow-duo"} {...others} />);
}

export default Component;
