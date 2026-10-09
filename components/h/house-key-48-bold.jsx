import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvnz_b5x.css';
import '../../css/q/qgo3qub9a.css';
import '../../css/l/lj93my_zy.css';
import '../../css/r/ryz6tf6qj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxvnz_b5x"/><path class="qgo3qub9a"/><path class="lj93my_zy"/><path class="ryz6tf6qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-key-48-bold"} {...others} />);
}

export default Component;
