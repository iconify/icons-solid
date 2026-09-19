import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x880s-uzh.css';
import '../../css/t/t5_14z-jz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x880s-uzh"/><path class="t5_14z-jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:redheart"} {...others} />);
}

export default Component;
