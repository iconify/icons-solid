import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3e719fvy.css';
import '../../css/q/qg6_0jboy.css';
import '../../css/b/bxexw5b-v.css';
import '../../css/n/ncqff0p4t.css';
import '../../css/d/dxh8x6bps.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="n3e719fvy"/><path class="qg6_0jboy"/><path class="bxexw5b-v"/><circle class="ncqff0p4t"/><circle class="dxh8x6bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:disk-two"} {...others} />);
}

export default Component;
