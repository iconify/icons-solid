import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-pxf5beu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d-pxf5beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:communications-tower"} {...others} />);
}

export default Component;
