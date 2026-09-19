import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp_aarktq.css';
import '../../css/u/uy9bf6bqn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vp_aarktq"/><path class="uy9bf6bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:ticket"} {...others} />);
}

export default Component;
