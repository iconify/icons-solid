import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvfqi0v0k.css';
import '../../css/l/los2jo2ye.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lvfqi0v0k"/><path class="los2jo2ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pyramid-48-bold"} {...others} />);
}

export default Component;
