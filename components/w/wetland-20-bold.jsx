import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bstt3tdqg.css';
import '../../css/f/fva0wsn1j.css';
import '../../css/h/hgv2l4uaq.css';
import '../../css/q/qusq3nbol.css';
import '../../css/w/wvwyv9bsc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bstt3tdqg"/><path class="fva0wsn1j"/><path class="hgv2l4uaq"/><path class="qusq3nbol"/><path class="wvwyv9bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wetland-20-bold"} {...others} />);
}

export default Component;
