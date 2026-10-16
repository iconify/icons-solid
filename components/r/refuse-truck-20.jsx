import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v540sbbbo.css';
import '../../css/j/jegh5lb3e.css';
import '../../css/s/sg57pbbwd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v540sbbbo"/><path class="jegh5lb3e"/><path class="sg57pbbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refuse-truck-20"} {...others} />);
}

export default Component;
