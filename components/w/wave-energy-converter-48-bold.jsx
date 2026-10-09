import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liot4-bzg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="liot4-bzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-energy-converter-48-bold"} {...others} />);
}

export default Component;
