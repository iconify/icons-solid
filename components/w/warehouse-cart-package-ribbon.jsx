import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i7-47bb5x.css';
import '../../css/m/mk7315bgn.css';
import '../../css/y/y9j1-lx8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i7-47bb5x"/><path class="mk7315bgn"/><path class="y9j1-lx8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:warehouse-cart-package-ribbon"} {...others} />);
}

export default Component;
