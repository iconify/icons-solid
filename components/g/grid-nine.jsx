import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/l/l5l0yeoqo.css';
import '../../css/c/cmd33kt4l.css';
import '../../css/l/lnqa5nb4k.css';
import '../../css/l/lt5tfr-sk.css';
import '../../css/u/uh05tmb8k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="l5l0yeoqo"/><path class="cmd33kt4l"/><path class="lnqa5nb4k"/><path class="lt5tfr-sk"/><path class="uh05tmb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grid-nine"} {...others} />);
}

export default Component;
