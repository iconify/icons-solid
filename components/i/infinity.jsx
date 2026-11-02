import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/ckwow205p.css';
import '../../css/v/v5w6enite.css';
import '../../css/d/dzzg-wo1p.css';
import '../../css/k/k9ooefbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ckwow205p"/><path class="v5w6enite"/><path class="dzzg-wo1p"/><path class="k9ooefbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:infinity"} {...others} />);
}

export default Component;
