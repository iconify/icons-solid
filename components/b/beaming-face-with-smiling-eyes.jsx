import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzugreb9v.css';
import '../../css/t/t1ifqebaa.css';
import '../../css/j/jb86n2ewc.css';
import '../../css/a/a8go1g1wl.css';
import '../../css/g/g2ghujjiv.css';
import '../../css/f/f_pc6zgpi.css';
import '../../css/y/yaryjkbsu.css';
import '../../css/x/xuplp8b7b.css';
import '../../css/p/poj053b_z.css';
import '../../css/r/rnwpzlnfh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zzugreb9v"/><path class="t1ifqebaa"/><path class="jb86n2ewc"/><path class="a8go1g1wl"/><path class="g2ghujjiv"/><path class="f_pc6zgpi"/><path class="yaryjkbsu"/><path class="xuplp8b7b"/><path class="poj053b_z"/><path class="rnwpzlnfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:beaming-face-with-smiling-eyes"} {...others} />);
}

export default Component;
