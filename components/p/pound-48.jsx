import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncqap6kqt.css';
import '../../css/w/w4cmqe7qc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ncqap6kqt"/><path class="w4cmqe7qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pound-48"} {...others} />);
}

export default Component;
