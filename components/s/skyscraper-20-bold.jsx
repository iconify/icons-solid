import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrwbit1kg.css';
import '../../css/l/l_fhzdbgx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vrwbit1kg"/><path class="l_fhzdbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skyscraper-20-bold"} {...others} />);
}

export default Component;
