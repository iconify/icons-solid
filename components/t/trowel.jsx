import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvu5yqbbf.css';
import '../../css/s/s68hkccgp.css';
import '../../css/k/k2vqxhb3v.css';
import '../../css/k/k7szp1b9w.css';
import '../../css/q/q11zvkdoq.css';
import '../../css/p/p1xpkg8dg.css';
import '../../css/k/kfazthbtj.css';
import '../../css/w/wmq7p2_kn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xvu5yqbbf"/><path class="s68hkccgp"/><path class="k2vqxhb3v"/><path class="k7szp1b9w"/><path class="q11zvkdoq"/><path class="p1xpkg8dg"/><path class="kfazthbtj"/><ellipse class="wmq7p2_kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:trowel"} {...others} />);
}

export default Component;
