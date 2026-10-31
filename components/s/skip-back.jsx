import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ta40-iiti.css';
import '../../css/j/jcbj0ebeu.css';
import '../../css/g/grlr48jst.css';
import '../../css/z/zkpnsybzi.css';
import '../../css/h/hajij5bit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ta40-iiti wm-shadow"/><path class="jcbj0ebeu"/><path class="grlr48jst"/><path class="zkpnsybzi"/><path class="hajij5bit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:skip-back"} {...others} />);
}

export default Component;
