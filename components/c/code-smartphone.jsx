import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spvfrgbsk.css';

const viewBox = {"width":344,"height":480};
const content = `<path class="spvfrgbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:code-smartphone"} {...others} />);
}

export default Component;
