import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7dwa2e_z.css';
import '../../css/w/wd-20gb_a.css';
import '../../css/g/gzv9kc5wi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t7dwa2e_z"/><path class="wd-20gb_a"/><path class="gzv9kc5wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:pie-chart"} {...others} />);
}

export default Component;
