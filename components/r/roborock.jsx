import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi7ny305v.css';

const viewBox = {"width":1136.55,"height":1136.55};
const content = `<path class="qi7ny305v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:roborock"} {...others} />);
}

export default Component;
