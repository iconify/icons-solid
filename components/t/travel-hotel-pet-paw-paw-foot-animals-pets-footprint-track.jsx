import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xhzc078zk.css';
import '../../css/n/ngfuyuw6n.css';
import '../../css/k/kwx04xbar.css';
import '../../css/n/nscanbc_r.css';
import '../../css/r/r86va-bqd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><ellipse class="xhzc078zk"/><ellipse class="ngfuyuw6n"/><ellipse class="kwx04xbar"/><ellipse class="nscanbc_r"/><path class="r86va-bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-pet-paw-paw-foot-animals-pets-footprint-track"} {...others} />);
}

export default Component;
