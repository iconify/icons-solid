import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt-ycyb9f.css';
import '../../css/p/poec0ggqv.css';
import '../../css/v/vr_w8fb0p.css';
import '../../css/g/gkqsl57ml.css';
import '../../css/q/qy40o-b8r.css';
import '../../css/z/zz32yhp9v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wt-ycyb9f"/><path class="poec0ggqv"/><path class="vr_w8fb0p"/><path class="gkqsl57ml"/><path class="qy40o-b8r"/><path class="zz32yhp9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:runtipi"} {...others} />);
}

export default Component;
