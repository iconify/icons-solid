import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykinbpbjf.css';
import '../../css/u/u_x0g8bmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykinbpbjf"/><path class="u_x0g8bmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:checkbox-checked"} {...others} />);
}

export default Component;
