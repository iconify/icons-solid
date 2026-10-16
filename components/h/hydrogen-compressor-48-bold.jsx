import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzxt0mswz.css';
import '../../css/f/fnuad0uhx.css';
import '../../css/k/kzyi2ibpl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hzxt0mswz"/><path class="fnuad0uhx"/><path class="kzyi2ibpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-compressor-48-bold"} {...others} />);
}

export default Component;
