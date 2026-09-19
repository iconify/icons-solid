import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wfx6i99th.css';
import '../../css/n/nkkh7xczj.css';
import '../../css/m/mo1bhs9ao.css';
import '../../css/i/iidcw5brz.css';
import '../../css/d/d03ao8bzs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="wfx6i99th"/><path class="nkkh7xczj"/><path class="mo1bhs9ao"/><path class="iidcw5brz"/><path class="d03ao8bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stopwatch-start"} {...others} />);
}

export default Component;
