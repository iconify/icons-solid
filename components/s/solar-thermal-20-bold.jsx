import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b52to0bjp.css';
import '../../css/p/pfj9i6b-u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b52to0bjp"/><path class="pfj9i6b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-thermal-20-bold"} {...others} />);
}

export default Component;
