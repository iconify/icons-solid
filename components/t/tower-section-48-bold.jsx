import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0im2rdhh.css';
import '../../css/q/qa5f_6hbj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q0im2rdhh"/><path class="qa5f_6hbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tower-section-48-bold"} {...others} />);
}

export default Component;
