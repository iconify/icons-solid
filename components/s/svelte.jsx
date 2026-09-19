import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/d/disvglb_n.css';
import '../../css/z/zcjdx8bee.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="disvglb_n"/><path class="zcjdx8bee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:svelte"} {...others} />);
}

export default Component;
