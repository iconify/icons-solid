import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wezgm_h4w.css';
import '../../css/s/sbasrbbib.css';
import '../../css/z/z92lvuenp.css';
import '../../css/c/crg_ojbbn.css';
import '../../css/e/empdt5byq.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wezgm_h4w"/><path class="sbasrbbib"/><path class="z92lvuenp"/><path class="crg_ojbbn"/><path class="empdt5byq"/><path class="j3cy-fbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-x-48"} {...others} />);
}

export default Component;
