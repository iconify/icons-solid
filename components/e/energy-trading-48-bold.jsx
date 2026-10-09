import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gaeaflbsb.css';
import '../../css/q/q2s99zbjl.css';
import '../../css/i/igpss3xso.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gaeaflbsb"/><path class="q2s99zbjl"/><path class="igpss3xso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-trading-48-bold"} {...others} />);
}

export default Component;
