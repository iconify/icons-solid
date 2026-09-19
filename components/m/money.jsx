import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muhsurbeo.css';
import '../../css/e/ebjac69rs.css';
import '../../css/y/yw7b3zbqk.css';
import '../../css/c/c3i53zn6y.css';
import '../../css/r/rw9-c4bsm.css';
import '../../css/z/zf_1f6w1z.css';
import '../../css/z/zvonclb_z.css';
import '../../css/e/e_wrryh8x.css';
import '../../css/b/b_yzl0bri.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="muhsurbeo"/><path clip-rule="evenodd" class="ebjac69rs"/><path clip-rule="evenodd" class="yw7b3zbqk"/><path clip-rule="evenodd" class="c3i53zn6y"/><path class="rw9-c4bsm"/><path clip-rule="evenodd" class="zf_1f6w1z"/><path class="zvonclb_z"/><path clip-rule="evenodd" class="e_wrryh8x"/><path class="b_yzl0bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:money"} {...others} />);
}

export default Component;
