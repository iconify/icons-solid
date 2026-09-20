import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b9o-gbb3n.css';
import '../../css/d/d555pjiva.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="b9o-gbb3n"/><path class="d555pjiva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bow-tie"} {...others} />);
}

export default Component;
