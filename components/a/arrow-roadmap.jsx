import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zjykyhbhu.css';
import '../../css/u/u1tl_fbmw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zjykyhbhu"/><path class="u1tl_fbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:arrow-roadmap"} {...others} />);
}

export default Component;
