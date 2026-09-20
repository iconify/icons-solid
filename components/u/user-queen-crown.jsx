import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pmwf-8b_d.css';
import '../../css/p/pvzuj3b6i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pmwf-8b_d"/><path class="pvzuj3b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-queen-crown"} {...others} />);
}

export default Component;
