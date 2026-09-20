import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-xppwbpj.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="g-xppwbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:charging-station-11"} {...others} />);
}

export default Component;
