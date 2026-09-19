import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5rhr4i0j.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="m5rhr4i0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:flag-start-o"} {...others} />);
}

export default Component;
