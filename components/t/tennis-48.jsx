import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3b3aw3dq.css';
import '../../css/e/ez7-yab4o.css';
import '../../css/i/ix90iqaap.css';
import '../../css/w/w-_59pb_f.css';
import '../../css/x/x7kav7bpi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j3b3aw3dq"/><path class="ez7-yab4o"/><path class="ix90iqaap"/><path class="w-_59pb_f"/><path class="x7kav7bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tennis-48"} {...others} />);
}

export default Component;
