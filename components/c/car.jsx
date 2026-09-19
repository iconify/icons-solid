import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkjrzmbux.css';
import '../../css/n/nsytfx8go.css';
import '../../css/n/n_eucjbqt.css';
import '../../css/o/oyyc7tb3f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vkjrzmbux"/><path clip-rule="evenodd" class="nsytfx8go"/><path class="n_eucjbqt"/><path class="oyyc7tb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:car"} {...others} />);
}

export default Component;
