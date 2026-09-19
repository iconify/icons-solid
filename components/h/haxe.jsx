import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/r/rdjuzybku.css';
import '../../css/z/zn1bxvb4h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="rdjuzybku"/><path class="zn1bxvb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:haxe"} {...others} />);
}

export default Component;
