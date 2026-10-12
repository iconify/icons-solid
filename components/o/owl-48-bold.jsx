import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugd2fac-m.css';
import '../../css/x/x5g82_bnd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ugd2fac-m"/><path class="x5g82_bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:owl-48-bold"} {...others} />);
}

export default Component;
