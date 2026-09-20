import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_xtwmbdd.css';
import '../../css/r/rwiamjb7l.css';
import '../../css/a/ap1bg2uwr.css';
import '../../css/b/bud_plbnr.css';
import '../../css/n/nylwc8bup.css';
import '../../css/q/qahisbnxb.css';
import '../../css/i/iok0n7rha.css';
import '../../css/s/smuoxab8g.css';
import '../../css/v/vv2qdd35y.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="ft5dv1b6b"><path class="z_xtwmbdd"/><path class="rwiamjb7l"/><path class="ap1bg2uwr"/><path class="bud_plbnr"/><path class="nylwc8bup"/><path class="qahisbnxb"/><path class="iok0n7rha"/><path class="smuoxab8g"/><path class="vv2qdd35y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:android-setting"} {...others} />);
}

export default Component;
