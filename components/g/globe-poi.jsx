import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj_8lcczn.css';
import '../../css/x/xy4c9hbng.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cj_8lcczn"/><path class="xy4c9hbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-poi"} {...others} />);
}

export default Component;
