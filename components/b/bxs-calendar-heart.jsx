import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrnj_gh_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vrnj_gh_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-calendar-heart"} {...others} />);
}

export default Component;
