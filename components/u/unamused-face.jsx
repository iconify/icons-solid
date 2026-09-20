import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/s/sicerrb4c.css';
import '../../css/d/dwe1rl4_v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="sicerrb4c"/><path class="dwe1rl4_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:unamused-face"} {...others} />);
}

export default Component;
