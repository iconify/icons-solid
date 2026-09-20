import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv2ni7q9g.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="dv2ni7q9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:x-solid"} {...others} />);
}

export default Component;
