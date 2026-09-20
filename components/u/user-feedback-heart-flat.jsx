import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/neq1w5biy.css';
import '../../css/d/dmfq79bui.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="neq1w5biy"/><path class="dmfq79bui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-feedback-heart-flat"} {...others} />);
}

export default Component;
