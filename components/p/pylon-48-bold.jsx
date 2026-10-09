import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9x5rac2h.css';
import '../../css/o/o63gs7ffv.css';
import '../../css/n/ne8de7own.css';
import '../../css/h/hfvtdh7cx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q9x5rac2h"/><path class="o63gs7ffv"/><path class="ne8de7own"/><path class="hfvtdh7cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-48-bold"} {...others} />);
}

export default Component;
