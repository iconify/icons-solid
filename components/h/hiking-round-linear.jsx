import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/e/eqbz-wbsh.css';
import '../../css/i/ig236ibqn.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/j/jotpxq6-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="eqbz-wbsh"/><path class="ig236ibqn"/><path class="cu7xy9b9y"/><path class="jotpxq6-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-round-linear"} {...others} />);
}

export default Component;
