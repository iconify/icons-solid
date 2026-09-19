import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giolxtb7t.css';
import '../../css/s/siz39bbgs.css';
import '../../css/u/u5-w1ybvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="giolxtb7t"/><path class="siz39bbgs"/><path class="u5-w1ybvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:maxxair-fan-delux-open"} {...others} />);
}

export default Component;
