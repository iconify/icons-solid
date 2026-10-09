import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hii-wibir.css';
import '../../css/n/n7h0dab1p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hii-wibir"/><path class="n7h0dab1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cpu-48"} {...others} />);
}

export default Component;
