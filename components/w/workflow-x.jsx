import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7_y0l8bv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7_y0l8bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:workflow-x"} {...others} />);
}

export default Component;
