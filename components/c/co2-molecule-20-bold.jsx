import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-pu_abiq.css';
import '../../css/m/m2fwg6b2k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-pu_abiq"/><path class="m2fwg6b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-molecule-20-bold"} {...others} />);
}

export default Component;
