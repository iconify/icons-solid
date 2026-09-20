import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u61vl1b-h.css';
import '../../css/u/ud94oijxq.css';
import '../../css/h/h2dcacdji.css';
import '../../css/s/s_hyqiben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u61vl1b-h"/><path class="ud94oijxq"/><path class="h2dcacdji"/><path class="s_hyqiben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dmc"} {...others} />);
}

export default Component;
