import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhtjdabbs.css';
import '../../css/o/o1i6lab6q.css';
import '../../css/d/dapkamb6l.css';
import '../../css/x/xh94e4byo.css';
import '../../css/w/wkr3_hv0f.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yhtjdabbs"/><path class="o1i6lab6q"/><path class="dapkamb6l"/><path class="xh94e4byo"/><path class="wkr3_hv0f"/><path class="ihmii9b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:balcony-solar-48-bold"} {...others} />);
}

export default Component;
