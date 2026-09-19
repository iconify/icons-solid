import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gful6qb2z.css';
import '../../css/i/ibg6j_bda.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="gful6qb2z"/><path class="ibg6j_bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:youtobe"} {...others} />);
}

export default Component;
