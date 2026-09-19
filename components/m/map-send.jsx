import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_-c96hat.css';
import '../../css/d/d-y09zibp.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="c_-c96hat"/><path class="d-y09zibp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-send"} {...others} />);
}

export default Component;
