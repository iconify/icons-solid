import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb2y1ebum.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="eb2y1ebum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tooltip-start-alert"} {...others} />);
}

export default Component;
