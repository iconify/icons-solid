import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/domb1qbek.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="domb1qbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:star-half-48-bold"} {...others} />);
}

export default Component;
