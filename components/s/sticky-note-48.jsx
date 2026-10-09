import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_3b78b5d.css';
import '../../css/w/w80p7wbue.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_3b78b5d"/><path class="w80p7wbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sticky-note-48"} {...others} />);
}

export default Component;
