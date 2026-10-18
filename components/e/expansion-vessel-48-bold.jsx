import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoujtnlpy.css';
import '../../css/c/cso2t9k2n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uoujtnlpy"/><path class="cso2t9k2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expansion-vessel-48-bold"} {...others} />);
}

export default Component;
