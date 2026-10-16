import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvyr40bsv.css';
import '../../css/g/gm9nibcja.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dvyr40bsv"/><path class="gm9nibcja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-mcs-48"} {...others} />);
}

export default Component;
