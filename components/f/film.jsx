import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a2qz-8bvf.css';
import '../../css/r/rp7pj5byd.css';
import '../../css/e/em65o5_sa.css';
import '../../css/y/ypjp-lbcf.css';
import '../../css/e/euj49csjz.css';
import '../../css/m/my7poevrw.css';
import '../../css/g/gv25y6bfn.css';
import '../../css/k/kan3c0cea.css';
import '../../css/u/uckwdqb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a2qz-8bvf"/><path class="rp7pj5byd"/><path class="em65o5_sa"/><path class="wm-shine ypjp-lbcf"/><path class="euj49csjz wm-k"/><path class="my7poevrw wm-a"/><path class="gv25y6bfn"/><path class="kan3c0cea"/><path class="uckwdqb2f wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:film"} {...others} />);
}

export default Component;
