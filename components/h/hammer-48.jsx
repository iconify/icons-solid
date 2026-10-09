import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpjjukh9y.css';
import '../../css/i/i21vf0uiq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vpjjukh9y"/><path class="i21vf0uiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammer-48"} {...others} />);
}

export default Component;
