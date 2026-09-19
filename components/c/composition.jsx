import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v17_2acth.css';
import '../../css/f/ffoe0dmwm.css';
import '../../css/u/uxajn92bi.css';
import '../../css/i/i6sxqebxi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v17_2acth"/><path class="ffoe0dmwm"/><path class="uxajn92bi"/><path class="i6sxqebxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:composition"} {...others} />);
}

export default Component;
