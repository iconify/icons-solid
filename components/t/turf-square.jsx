import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7gnshbpu.css';
import '../../css/k/ka8c7ss6d.css';
import '../../css/d/dh3rien5h.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="s7gnshbpu"/><path class="ka8c7ss6d"/><path class="dh3rien5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-square"} {...others} />);
}

export default Component;
