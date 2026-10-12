import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suuvhacgc.css';
import '../../css/c/codq7jbgp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="suuvhacgc"/><path class="codq7jbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bear-20"} {...others} />);
}

export default Component;
