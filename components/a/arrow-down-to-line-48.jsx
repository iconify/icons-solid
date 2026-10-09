import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofzjtmbpe.css';
import '../../css/r/rm_v3ccms.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ofzjtmbpe"/><path class="rm_v3ccms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-to-line-48"} {...others} />);
}

export default Component;
