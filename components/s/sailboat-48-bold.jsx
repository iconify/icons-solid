import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdtvt3bkl.css';
import '../../css/b/bypdiev1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gdtvt3bkl"/><path class="bypdiev1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sailboat-48-bold"} {...others} />);
}

export default Component;
