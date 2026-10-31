import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y48klo2sh.css';
import '../../css/v/vp0b50bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y48klo2sh"/><path class="vp0b50bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:zap-off"} {...others} />);
}

export default Component;
