import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j24r7t3kx.css';
import '../../css/z/zpl0xftkb.css';
import '../../css/s/spr6c-bnl.css';
import '../../css/c/cg51-m76o.css';
import '../../css/z/z2_f9bc4l.css';
import '../../css/r/r1txdu85k.css';
import '../../css/n/nnjp9ccor.css';
import '../../css/e/e-bd8hcrb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="j24r7t3kx"/><path class="zpl0xftkb"/><path class="spr6c-bnl"/><path class="cg51-m76o"/><path class="z2_f9bc4l"/><path class="r1txdu85k"/><path class="nnjp9ccor"/><path class="e-bd8hcrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:guadeloupe"} {...others} />);
}

export default Component;
