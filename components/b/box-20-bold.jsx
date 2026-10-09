import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wws_a7ftb.css';
import '../../css/n/nlzn_o26i.css';
import '../../css/u/uu38agbdn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wws_a7ftb"/><path class="nlzn_o26i"/><path class="uu38agbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-20-bold"} {...others} />);
}

export default Component;
