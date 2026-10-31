import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/og7bcw3-q.css';
import '../../css/b/b-z7zjbfn.css';
import '../../css/i/itx5-fheu.css';
import '../../css/x/xpmjmd9yr.css';
import '../../css/v/vnfkbvmnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="og7bcw3-q"/><path class="b-z7zjbfn"/><path class="itx5-fheu wm-shine"/><path class="xpmjmd9yr"/><path class="vnfkbvmnw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:key"} {...others} />);
}

export default Component;
