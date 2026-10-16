import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oanyu-b7f.css';
import '../../css/a/aq7lsdb9w.css';
import '../../css/m/mbsy57b8u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oanyu-b7f"/><path class="aq7lsdb9w"/><path class="mbsy57b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:assembly-line-48-bold"} {...others} />);
}

export default Component;
