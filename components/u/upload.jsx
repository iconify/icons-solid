import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/axgtqm-rm.css';
import '../../css/c/c4cou6gnm.css';
import '../../css/b/b-3l01n7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="axgtqm-rm wm-shadow"/><path class="c4cou6gnm"/><path class="b-3l01n7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:upload"} {...others} />);
}

export default Component;
