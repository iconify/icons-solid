import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9pma4byw.css';
import '../../css/n/nw2o_v4gp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u9pma4byw"/><path class="nw2o_v4gp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-plus-inside"} {...others} />);
}

export default Component;
