import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o3dhomb8m.css';
import '../../css/a/avk9c7bff.css';
import '../../css/a/a3x66k91v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="o3dhomb8m"/><path class="avk9c7bff"/><path class="a3x66k91v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:headwear"} {...others} />);
}

export default Component;
