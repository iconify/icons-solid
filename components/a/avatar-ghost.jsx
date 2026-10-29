import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v92bq9z-v.css';
import '../../css/u/u2gysevix.css';
import '../../css/m/mpnr6nbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v92bq9z-v"/><path class="u2gysevix"/><path class="mpnr6nbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-ghost"} {...others} />);
}

export default Component;
