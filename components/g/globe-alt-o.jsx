import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et6f67bcf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="et6f67bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-alt-o"} {...others} />);
}

export default Component;
