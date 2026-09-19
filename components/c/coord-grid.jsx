import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g57i3fc6z.css';
import '../../css/e/eedc6fbmn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="g57i3fc6z"/><path class="eedc6fbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:coord-grid"} {...others} />);
}

export default Component;
