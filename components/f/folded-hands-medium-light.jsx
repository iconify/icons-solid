import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/meuvmvb5k.css';
import '../../css/i/i2_wnhkxt.css';
import '../../css/d/dsjfspb1b.css';
import '../../css/w/w27x-dd3d.css';
import '../../css/j/jinwxtt4h.css';
import '../../css/d/dhxo58blv.css';
import '../../css/l/l8pu2sbyf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="meuvmvb5k"/><path class="i2_wnhkxt"/><path clip-rule="evenodd" class="dsjfspb1b"/><path class="w27x-dd3d"/><path clip-rule="evenodd" class="jinwxtt4h"/><path clip-rule="evenodd" class="dhxo58blv"/><path class="l8pu2sbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:folded-hands-medium-light"} {...others} />);
}

export default Component;
