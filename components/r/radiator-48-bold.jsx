import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxjqujbwc.css';
import '../../css/l/l1832ablw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fxjqujbwc"/><path class="l1832ablw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-48-bold"} {...others} />);
}

export default Component;
