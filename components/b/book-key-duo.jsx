import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0sxejbew.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/d/d962hab1x.css';
import '../../css/j/jqu4q6bku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary u0sxejbew"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="d962hab1x"/><path class="jqu4q6bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-key-duo"} {...others} />);
}

export default Component;
