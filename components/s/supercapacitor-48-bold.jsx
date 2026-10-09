import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1e2bd8kv.css';
import '../../css/w/we_pq2bjv.css';
import '../../css/z/z582fmbiy.css';
import '../../css/x/xmyv43b7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e1e2bd8kv"/><path class="we_pq2bjv"/><path class="z582fmbiy"/><path class="xmyv43b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supercapacitor-48-bold"} {...others} />);
}

export default Component;
