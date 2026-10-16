import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/h/hr-w5-6dr.css';
import '../../css/f/fn-oc8a_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="hr-w5-6dr"/><path class="fn-oc8a_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-nuclear-48-bold"} {...others} />);
}

export default Component;
