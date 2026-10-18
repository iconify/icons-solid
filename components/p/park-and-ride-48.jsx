import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtl8kcc2s.css';
import '../../css/a/a03juec7r.css';
import '../../css/c/cnx91p7lj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mtl8kcc2s"/><path class="a03juec7r"/><path class="cnx91p7lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:park-and-ride-48"} {...others} />);
}

export default Component;
