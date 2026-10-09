import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzjyr_m9i.css';
import '../../css/e/ej_mrn1yb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rzjyr_m9i"/><path class="ej_mrn1yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-20-bold"} {...others} />);
}

export default Component;
