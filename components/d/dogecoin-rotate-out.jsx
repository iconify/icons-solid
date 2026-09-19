import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kedgqhb0m.css';
import '../../css/c/c8gr5rb1v.css';
import '../../css/x/xrp0be2xv.css';
import '../../css/d/dctwlj4pp.css';
import '../../css/s/sojskj61w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kedgqhb0m"/><path class="c8gr5rb1v"/><path class="xrp0be2xv"/><path class="dctwlj4pp"/><path class="sojskj61w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dogecoin-rotate-out"} {...others} />);
}

export default Component;
