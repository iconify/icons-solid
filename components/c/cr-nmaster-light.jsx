import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poddgvb-j.css';
import '../../css/u/uqp1_ibtg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="poddgvb-j"/><path class="uqp1_ibtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cr-nmaster-light"} {...others} />);
}

export default Component;
