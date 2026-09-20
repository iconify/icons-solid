import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/updxjmbtx.css';
import '../../css/v/v3dihab8e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="updxjmbtx"/><path class="v3dihab8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:suitcase-rolling"} {...others} />);
}

export default Component;
