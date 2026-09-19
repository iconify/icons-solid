import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q90_u7bjq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="q90_u7bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:copy-poly"} {...others} />);
}

export default Component;
