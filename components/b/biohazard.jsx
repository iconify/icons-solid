import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg_wpcd8m.css';

const viewBox = {"width":1024,"height":962};
const content = `<path class="kg_wpcd8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:biohazard"} {...others} />);
}

export default Component;
