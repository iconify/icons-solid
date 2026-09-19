import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exe1s9bim.css';
import '../../css/g/gng30g8lb.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="exe1s9bim"/><path class="gng30g8lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-users"} {...others} />);
}

export default Component;
