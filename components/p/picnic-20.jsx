import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aizeie9_j.css';
import '../../css/d/d-a358n2r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aizeie9_j"/><path class="d-a358n2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:picnic-20"} {...others} />);
}

export default Component;
