import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e-yqelbcm.css';
import '../../css/r/rxa6cdc4l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="e-yqelbcm"/><path class="rxa6cdc4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:egg-one"} {...others} />);
}

export default Component;
