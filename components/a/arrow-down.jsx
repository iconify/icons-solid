import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp1sjjb2d.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="gp1sjjb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:arrow-down"} {...others} />);
}

export default Component;
