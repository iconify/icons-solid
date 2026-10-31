import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t0x4sj40f.css';
import '../../css/g/glt6q1bcl.css';
import '../../css/s/spqppbh5d.css';
import '../../css/s/sw9h8e1mf.css';
import '../../css/y/y64zqrxgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t0x4sj40f"/><path class="glt6q1bcl wm-shine"/><path class="spqppbh5d wm-k"/><path class="sw9h8e1mf wm-a"/><path class="wm-deco y64zqrxgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pen-line"} {...others} />);
}

export default Component;
