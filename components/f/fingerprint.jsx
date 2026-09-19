import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_s-s2rgw.css';
import '../../css/t/te525ybvr.css';
import '../../css/i/ih6yu9j5y.css';
import '../../css/t/tnnhe8b8y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e_s-s2rgw"/><path class="te525ybvr"/><path class="ih6yu9j5y"/><path class="tnnhe8b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:fingerprint"} {...others} />);
}

export default Component;
