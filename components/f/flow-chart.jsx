import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkhi9lbht.css';
import '../../css/q/qvchyyb3r.css';
import '../../css/s/svglptr5r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tkhi9lbht"/><path class="qvchyyb3r"/><path class="svglptr5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:flow-chart"} {...others} />);
}

export default Component;
