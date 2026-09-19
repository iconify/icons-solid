import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkhkx2bsp.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="hkhkx2bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:beaker-compact"} {...others} />);
}

export default Component;
