import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq-0iysrl.css';
import '../../css/a/aawwu-mdm.css';
import '../../css/y/y4hrchb5w.css';
import '../../css/f/fyzrulpdg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uq-0iysrl"/><path class="aawwu-mdm"/><path class="y4hrchb5w"/><path class="fyzrulpdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:timer"} {...others} />);
}

export default Component;
