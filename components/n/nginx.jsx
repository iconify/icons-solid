import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/t/togmqd0vy.css';
import '../../css/r/rfctt0bky.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="togmqd0vy"/><path class="rfctt0bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:nginx"} {...others} />);
}

export default Component;
