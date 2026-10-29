import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7cw3xbud.css';
import '../../css/p/pyapzsbgi.css';
import '../../css/m/mo6o3slzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7cw3xbud wm-k"/><path class="pyapzsbgi wm-a"/><path class="mo6o3slzv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wind"} {...others} />);
}

export default Component;
