import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahmy5tb-o.css';
import '../../css/o/o3s572blx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ahmy5tb-o"/><path class="o3s572blx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:copy-48-bold"} {...others} />);
}

export default Component;
