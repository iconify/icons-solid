import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pedr4_bjp.css';
import '../../css/w/wk04f5vlf.css';
import '../../css/o/o6pwbnxip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pedr4_bjp"/><path class="wk04f5vlf"/><path class="o6pwbnxip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:synchronous-condenser-48-bold"} {...others} />);
}

export default Component;
