import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/k/kd9hivzqs.css';
import '../../css/a/ay7-wge4s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="kd9hivzqs"/><path class="ay7-wge4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-substation-48-bold"} {...others} />);
}

export default Component;
