import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nq2bfjt_i.css';
import '../../css/m/m6bds7kfn.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="nq2bfjt_i"/><path class="m6bds7kfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:edit-circle"} {...others} />);
}

export default Component;
