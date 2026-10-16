import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mexbaph4c.css';
import '../../css/c/c89fhw9bu.css';
import '../../css/l/lm4-qnbeh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mexbaph4c"/><path class="c89fhw9bu"/><path class="lm4-qnbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-hydro-48"} {...others} />);
}

export default Component;
