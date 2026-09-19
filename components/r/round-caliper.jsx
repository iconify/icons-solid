import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/r/r2b3htb0e.css';
import '../../css/f/fafaftbdf.css';
import '../../css/h/hedkh-yow.css';
import '../../css/i/insrjhfex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b08in11er"/><path class="r2b3htb0e"/><path class="fafaftbdf"/><path class="hedkh-yow"/><path class="insrjhfex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:round-caliper"} {...others} />);
}

export default Component;
