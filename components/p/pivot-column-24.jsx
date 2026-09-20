import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jff5k-bht.css';
import '../../css/t/tpx4xacpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jff5k-bht"/><path class="tpx4xacpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:pivot-column-24"} {...others} />);
}

export default Component;
