import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eusd4acvh.css';
import '../../css/j/j3crdysra.css';
import '../../css/s/sbcgckbbe.css';
import '../../css/u/ubdnfdbet.css';
import '../../css/a/ag6l6x2vj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="eusd4acvh wm-shadow"/><path class="j3crdysra"/><path class="sbcgckbbe"/><path class="ubdnfdbet"/><path class="ag6l6x2vj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-bear"} {...others} />);
}

export default Component;
