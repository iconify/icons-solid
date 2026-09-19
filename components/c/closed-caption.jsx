import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5mnzse4d.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="d5mnzse4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:closed-caption"} {...others} />);
}

export default Component;
