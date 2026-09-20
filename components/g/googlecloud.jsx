import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxubckb9w.css';
import '../../css/n/nbl00ebkt.css';
import '../../css/w/wtyrvmbzc.css';
import '../../css/h/hr-360lqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxubckb9w"/><path class="nbl00ebkt"/><path class="wtyrvmbzc"/><path class="hr-360lqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:googlecloud"} {...others} />);
}

export default Component;
