import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckanf-3yy.css';
import '../../css/h/h-c11pbsf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ckanf-3yy"/><path class="h-c11pbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pie-chart-outline"} {...others} />);
}

export default Component;
