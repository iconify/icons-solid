import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shtfijqih.css';
import '../../css/i/ibp9wvvmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="shtfijqih"/><path class="ibp9wvvmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:euro-48"} {...others} />);
}

export default Component;
