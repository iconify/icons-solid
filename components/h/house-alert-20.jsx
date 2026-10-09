import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/q/qz4brhaoj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="qz4brhaoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-alert-20"} {...others} />);
}

export default Component;
