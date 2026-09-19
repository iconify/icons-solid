import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxlqk9beh.css';
import '../../css/y/yo439s51q.css';
import '../../css/c/cs4v2ib4u.css';
import '../../css/u/uuoiwqtfb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fxlqk9beh"/><path class="yo439s51q"/><path class="cs4v2ib4u"/><path class="uuoiwqtfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sapling"} {...others} />);
}

export default Component;
