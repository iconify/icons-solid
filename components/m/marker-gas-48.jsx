import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/k/k-xlivbjv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="k-xlivbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-gas-48"} {...others} />);
}

export default Component;
