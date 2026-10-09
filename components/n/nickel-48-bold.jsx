import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omdaj5bmv.css';
import '../../css/a/aq7muybgs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="omdaj5bmv"/><path class="aq7muybgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nickel-48-bold"} {...others} />);
}

export default Component;
