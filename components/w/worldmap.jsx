import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr9e-ibdt.css';
import '../../css/a/ag80qrbfj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sr9e-ibdt"/><path class="ag80qrbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:worldmap"} {...others} />);
}

export default Component;
