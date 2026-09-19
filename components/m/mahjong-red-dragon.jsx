import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5qjeeb_r.css';
import '../../css/n/ns5h80bhw.css';
import '../../css/v/vy_klyb3d.css';
import '../../css/j/j_-qouind.css';
import '../../css/e/e3nb2wbiz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h5qjeeb_r"/><path class="ns5h80bhw"/><path class="vy_klyb3d"/><rect class="j_-qouind"/><path class="e3nb2wbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mahjong-red-dragon"} {...others} />);
}

export default Component;
