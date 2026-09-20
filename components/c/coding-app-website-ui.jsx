import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqtn154ri.css';
import '../../css/j/jet956q8h.css';
import '../../css/e/ehc2jfx_i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oqtn154ri"/><path class="jet956q8h"/><path class="ehc2jfx_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-app-website-ui"} {...others} />);
}

export default Component;
