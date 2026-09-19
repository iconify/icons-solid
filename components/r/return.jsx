import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ugj513b_d.css';
import '../../css/v/v7yst0b9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ugj513b_d"/><path class="v7yst0b9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:return"} {...others} />);
}

export default Component;
