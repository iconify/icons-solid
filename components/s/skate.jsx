import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e47n3e20o.css';
import '../../css/q/q63gl3bnb.css';
import '../../css/i/i3g4ynr5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e47n3e20o"/><path class="q63gl3bnb"/><path class="i3g4ynr5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:skate"} {...others} />);
}

export default Component;
