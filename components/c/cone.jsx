import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/a/amd3c_7ux.css';
import '../../css/w/wjkzsobel.css';
import '../../css/i/ihj7g8l1o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><ellipse class="amd3c_7ux"/><path class="wjkzsobel"/><path class="ihj7g8l1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cone"} {...others} />);
}

export default Component;
