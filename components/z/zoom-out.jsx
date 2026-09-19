import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0k7v5bvi.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="h0k7v5bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:zoom-out"} {...others} />);
}

export default Component;
