import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7vsp1bys.css';
import '../../css/u/u2bj5pb5k.css';
import '../../css/l/lutt4cc1w.css';
import '../../css/d/d8c64zbxv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l7vsp1bys"/><path class="u2bj5pb5k"/><path class="lutt4cc1w"/><path class="d8c64zbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-bus-48"} {...others} />);
}

export default Component;
