import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m4qhqpswk.css';
import '../../css/d/dd41nxbxg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="m4qhqpswk"/><path class="dd41nxbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:merge-pdf"} {...others} />);
}

export default Component;
