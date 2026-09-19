import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtvkpyk2g.css';
import '../../css/e/egat0bbgw.css';
import '../../css/x/xgsdye9cb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vtvkpyk2g"/><path class="egat0bbgw"/><path class="xgsdye9cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:firstquartermoonface"} {...others} />);
}

export default Component;
