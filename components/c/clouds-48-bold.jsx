import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzpt0u8pe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qzpt0u8pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clouds-48-bold"} {...others} />);
}

export default Component;
