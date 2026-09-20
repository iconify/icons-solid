import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfqktd0wo.css';
import '../../css/w/wk8n8abhk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yfqktd0wo"/><path clip-rule="evenodd" class="wk8n8abhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ui-panel-right-16"} {...others} />);
}

export default Component;
