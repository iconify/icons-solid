import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grbq68bib.css';
import '../../css/a/aqu--qbne.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="grbq68bib"/><path class="aqu--qbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tent-48"} {...others} />);
}

export default Component;
