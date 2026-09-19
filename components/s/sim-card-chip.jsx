import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv0sseb2v.css';
import '../../css/h/hgwopu5qn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iv0sseb2v"/><path class="hgwopu5qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:sim-card-chip"} {...others} />);
}

export default Component;
