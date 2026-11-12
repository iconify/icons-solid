import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we467pf1g.css';
import '../../css/x/xfxpombnv.css';
import '../../css/e/eikzejq2l.css';
import '../../css/k/kkjdcnr7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we467pf1g"/><path class="xfxpombnv"/><path class="eikzejq2l"/><path class="kkjdcnr7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-containers-lxc-dark"} {...others} />);
}

export default Component;
