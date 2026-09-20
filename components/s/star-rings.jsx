import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/alq2npp-y.css';
import '../../css/t/t0-bh1brh.css';
import '../../css/c/cxt6ycbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="alq2npp-y"/><path class="t0-bh1brh"/><path class="cxt6ycbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-rings"} {...others} />);
}

export default Component;
