import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqnn4pbcu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iqnn4pbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:diamond-48-bold"} {...others} />);
}

export default Component;
