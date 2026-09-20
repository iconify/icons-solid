import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wlpepoc1f.css';
import '../../css/d/d3ws0udmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="wlpepoc1f"/><path class="d3ws0udmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:businessman"} {...others} />);
}

export default Component;
