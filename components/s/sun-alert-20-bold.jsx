import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksqrfbb0k.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/d/d0igczcjx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ksqrfbb0k"/><path class="aqsnv9bnd"/><path class="d0igczcjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-alert-20-bold"} {...others} />);
}

export default Component;
