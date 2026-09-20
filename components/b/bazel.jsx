import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zphcu1bzl.css';
import '../../css/y/yvrgpkbpr.css';
import '../../css/r/rbej42bij.css';
import '../../css/n/n7vgbrb4x.css';
import '../../css/o/o1-pbuanu.css';
import '../../css/s/sc_r7wb1j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zphcu1bzl"/><path class="yvrgpkbpr"/><path class="rbej42bij"/><path class="n7vgbrb4x"/><path class="o1-pbuanu"/><path class="sc_r7wb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bazel"} {...others} />);
}

export default Component;
