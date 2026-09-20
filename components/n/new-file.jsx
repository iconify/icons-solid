import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h49e0tfyw.css';
import '../../css/y/y0gjfnb_z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="h49e0tfyw"/><path class="y0gjfnb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:new-file"} {...others} />);
}

export default Component;
