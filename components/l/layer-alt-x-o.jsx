import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymjpdm2-p.css';
import '../../css/h/ha1q3jlnu.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ymjpdm2-p"/><path class="ha1q3jlnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layer-alt-x-o"} {...others} />);
}

export default Component;
