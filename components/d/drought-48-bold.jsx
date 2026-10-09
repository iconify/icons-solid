import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diqsj_bxu.css';
import '../../css/g/g0orui1mh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="diqsj_bxu"/><path class="g0orui1mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drought-48-bold"} {...others} />);
}

export default Component;
