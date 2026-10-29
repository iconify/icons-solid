import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjsphbpy.css';
import '../../css/r/rev37acue.css';
import '../../css/y/yeraqkb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivjsphbpy wm-k"/><path class="rev37acue wm-k"/><path class="wm-a yeraqkb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:crosshair"} {...others} />);
}

export default Component;
