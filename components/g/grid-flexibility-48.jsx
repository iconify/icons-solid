import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p860fxb3j.css';
import '../../css/i/igyv2ne6w.css';
import '../../css/o/o3ufdkm0c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p860fxb3j"/><path class="igyv2ne6w"/><path class="o3ufdkm0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-flexibility-48"} {...others} />);
}

export default Component;
