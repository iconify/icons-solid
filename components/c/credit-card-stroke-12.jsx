import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1420tb-x.css';
import '../../css/o/o2k0j_bqg.css';

const viewBox = {"width":12,"height":12};
const content = `<rect class="d1420tb-x"/><path class="o2k0j_bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:credit-card-stroke-12"} {...others} />);
}

export default Component;
