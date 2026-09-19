import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nka10dbuy.css';
import '../../css/j/jjad_uqvt.css';
import '../../css/a/avokf88mz.css';
import '../../css/p/pmu0y3bya.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nka10dbuy"/><path class="jjad_uqvt"/><path class="avokf88mz"/><path class="pmu0y3bya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lowerleftcrayon"} {...others} />);
}

export default Component;
