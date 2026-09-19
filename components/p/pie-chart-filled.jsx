import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w37h81bqn.css';
import '../../css/c/ccl9t3mye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w37h81bqn"/><path class="ccl9t3mye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:pie-chart-filled"} {...others} />);
}

export default Component;
