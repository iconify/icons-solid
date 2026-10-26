import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih6hr7r5i.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="ih6hr7r5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:godonateme"} {...others} />);
}

export default Component;
