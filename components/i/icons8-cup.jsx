import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny01ndbld.css';
import '../../css/q/q1m6kzbir.css';
import '../../css/m/mfb-umueb.css';
import '../../css/u/uvbrxut2r.css';
import '../../css/i/iocexdb6q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ny01ndbld"/><g class="q1m6kzbir"><path class="mfb-umueb"/><path class="uvbrxut2r"/></g><path class="iocexdb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:icons8-cup"} {...others} />);
}

export default Component;
