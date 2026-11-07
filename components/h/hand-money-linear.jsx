import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/ppiqvxdhm.css';
import '../../css/y/yzr3dkbsp.css';
import '../../css/t/tbj4v967z.css';
import '../../css/w/wkjagdcqz.css';
import '../../css/z/z1sl1lb9g.css';
import '../../css/x/x9mbjuqjl.css';
import '../../css/a/a3scpvo1f.css';
import '../../css/e/eck4ylbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ppiqvxdhm"/><path class="yzr3dkbsp"/><path class="tbj4v967z"/><path class="wkjagdcqz"/><path class="z1sl1lb9g"/><path class="x9mbjuqjl"/><path class="a3scpvo1f"/><path class="eck4ylbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-money-linear"} {...others} />);
}

export default Component;
