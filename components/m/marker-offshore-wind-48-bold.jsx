import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/f/fti4opbqx.css';
import '../../css/e/e0-myro4s.css';
import '../../css/i/i9n-a3bcw.css';
import '../../css/t/t0uexbbdm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="fti4opbqx"/><path class="e0-myro4s"/><path class="i9n-a3bcw"/><path class="t0uexbbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-offshore-wind-48-bold"} {...others} />);
}

export default Component;
