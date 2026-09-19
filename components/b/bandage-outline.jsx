import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei0vgbcyu.css';
import '../../css/u/upm2ipmtj.css';
import '../../css/m/myfh07wzv.css';
import '../../css/o/of2dvxoml.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ei0vgbcyu"/><path clip-rule="evenodd" class="upm2ipmtj"/><path class="myfh07wzv"/><path clip-rule="evenodd" class="of2dvxoml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage-outline"} {...others} />);
}

export default Component;
