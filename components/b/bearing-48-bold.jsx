import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_6rndbde.css';
import '../../css/t/tem3d3bqw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e_6rndbde"/><path class="tem3d3bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bearing-48-bold"} {...others} />);
}

export default Component;
