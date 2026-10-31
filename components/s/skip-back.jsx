import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o6hi-nbvv.css';
import '../../css/x/x6z6lr80t.css';
import '../../css/f/f97t71bew.css';
import '../../css/y/y1_qhmb2d.css';
import '../../css/b/bx0wdaclv.css';
import '../../css/i/if80drptv.css';
import '../../css/u/uvmv3pb4n.css';
import '../../css/w/w0z60eb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o6hi-nbvv"/><path class="x6z6lr80t"/><path class="f97t71bew wm-shine"/><path class="wm-k y1_qhmb2d"/><path class="bx0wdaclv wm-a"/><path class="if80drptv"/><path class="uvmv3pb4n"/><path class="w0z60eb5y wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:skip-back"} {...others} />);
}

export default Component;
