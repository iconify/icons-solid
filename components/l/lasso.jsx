import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mrli8m4nv.css';
import '../../css/b/bly0oihkk.css';
import '../../css/v/v88mtsb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><ellipse class="mrli8m4nv"/><path class="bly0oihkk"/><path class="v88mtsb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lasso"} {...others} />);
}

export default Component;
