import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6nhtqbrl.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="r6nhtqbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:eyedropper"} {...others} />);
}

export default Component;
