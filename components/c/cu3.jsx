import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7ze_xbnd.css';
import '../../css/o/o-ow-2npg.css';
import '../../css/h/hw5whrlil.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c7ze_xbnd"/><path class="o-ow-2npg"/><path class="hw5whrlil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cu3"} {...others} />);
}

export default Component;
