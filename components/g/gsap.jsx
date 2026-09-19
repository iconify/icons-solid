import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz3vwebsj.css';
import '../../css/l/l2g7ibbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hz3vwebsj"/><path class="l2g7ibbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:gsap"} {...others} />);
}

export default Component;
