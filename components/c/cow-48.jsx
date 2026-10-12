import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxvst7bbl.css';
import '../../css/s/syk3pwbrl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qxvst7bbl"/><path class="syk3pwbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cow-48"} {...others} />);
}

export default Component;
