import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/v/v5f8zgbcw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="v5f8zgbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-48"} {...others} />);
}

export default Component;
