import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_s7g_bel.css';
import '../../css/r/rz282cqep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_s7g_bel"/><path class="rz282cqep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:user-circle"} {...others} />);
}

export default Component;
