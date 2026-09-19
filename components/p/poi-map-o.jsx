import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq6a8xb0a.css';
import '../../css/o/okbbhw_ne.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="tq6a8xb0a"/><path class="okbbhw_ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:poi-map-o"} {...others} />);
}

export default Component;
