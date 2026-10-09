import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbmplvbtr.css';
import '../../css/z/ztnh5ln4w.css';
import '../../css/a/afdw2ab2k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sbmplvbtr"/><path class="ztnh5ln4w"/><path class="afdw2ab2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-in-20"} {...others} />);
}

export default Component;
