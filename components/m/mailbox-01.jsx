import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qbtjsobxy.css';
import '../../css/r/rl4wv9bhm.css';
import '../../css/s/sf1qombsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qbtjsobxy"/><path class="rl4wv9bhm"/><path class="sf1qombsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mailbox-01"} {...others} />);
}

export default Component;
