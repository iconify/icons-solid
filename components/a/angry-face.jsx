import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cd7zj2mlo.css';
import '../../css/u/uo37p1btr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="cd7zj2mlo"/><path class="uo37p1btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:angry-face"} {...others} />);
}

export default Component;
