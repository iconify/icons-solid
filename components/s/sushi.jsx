import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyn6rc_-u.css';
import '../../css/j/j_ie9rx3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyn6rc_-u"/><ellipse class="j_ie9rx3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:sushi"} {...others} />);
}

export default Component;
