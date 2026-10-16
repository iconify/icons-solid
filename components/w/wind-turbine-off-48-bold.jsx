import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otu-ipbqt.css';
import '../../css/q/q1xmknq-a.css';
import '../../css/s/s50abdb3y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="otu-ipbqt"/><path class="q1xmknq-a"/><path class="s50abdb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-off-48-bold"} {...others} />);
}

export default Component;
