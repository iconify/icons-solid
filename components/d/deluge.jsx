import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dif6p1bms.css';
import '../../css/u/u1-7rbomv.css';
import '../../css/s/smgw8kb-o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dif6p1bms"/><path class="u1-7rbomv"/><path class="smgw8kb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:deluge"} {...others} />);
}

export default Component;
