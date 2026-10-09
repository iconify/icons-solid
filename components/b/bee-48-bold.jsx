import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plya-7jhm.css';
import '../../css/i/iurj758pl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="plya-7jhm"/><path class="iurj758pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bee-48-bold"} {...others} />);
}

export default Component;
