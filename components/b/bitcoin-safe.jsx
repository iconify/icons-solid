import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/go5qx8a4v.css';
import '../../css/z/zbuz9ebso.css';
import '../../css/g/gu9f0qb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="go5qx8a4v"/><path class="zbuz9ebso"/><path class="gu9f0qb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-safe"} {...others} />);
}

export default Component;
