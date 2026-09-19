import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m8jst2b2y.css';
import '../../css/y/ya3ntxb4w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m8jst2b2y"/><path class="ya3ntxb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-left-up"} {...others} />);
}

export default Component;
