import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdn7143ls.css';
import '../../css/k/kr6gu5bwb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tdn7143ls"/><path class="kr6gu5bwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:semi-detached-48-bold"} {...others} />);
}

export default Component;
