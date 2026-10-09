import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xedufpf4g.css';
import '../../css/p/pfnbi-dgu.css';
import '../../css/r/rnwwcable.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xedufpf4g"/><path class="pfnbi-dgu"/><path class="rnwwcable"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-trading-48"} {...others} />);
}

export default Component;
