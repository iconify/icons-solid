import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkzd28t8y.css';
import '../../css/h/hbji4i9fj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bkzd28t8y"/><path class="hbji4i9fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hvdc-converter-48-bold"} {...others} />);
}

export default Component;
