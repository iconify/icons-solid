import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iye6zdbmz.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/y/ycawehbdj.css';
import '../../css/o/o49jzbcjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="iye6zdbmz"/><path class="cfkicbk9n"/><path class="ycawehbdj"/><path class="o49jzbcjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grid-2x2-plus"} {...others} />);
}

export default Component;
