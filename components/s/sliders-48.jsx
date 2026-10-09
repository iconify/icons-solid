import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgbwyl0oj.css';
import '../../css/z/zigsfjb_g.css';
import '../../css/s/s07rpetsy.css';
import '../../css/v/v-dy6pbde.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fgbwyl0oj"/><path class="zigsfjb_g"/><path class="s07rpetsy"/><path class="v-dy6pbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sliders-48"} {...others} />);
}

export default Component;
