import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oitekc77l.css';
import '../../css/m/m6f9qoawr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oitekc77l"/><path class="m6f9qoawr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-bottle-48"} {...others} />);
}

export default Component;
