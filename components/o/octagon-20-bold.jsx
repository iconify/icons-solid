import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcs_wdb-p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jcs_wdb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:octagon-20-bold"} {...others} />);
}

export default Component;
