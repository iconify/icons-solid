import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixky28b1f.css';
import '../../css/y/ye90rbccq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixky28b1f"/><path class="ye90rbccq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pip-2-bold-duotone"} {...others} />);
}

export default Component;
