import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3ttebb7p.css';
import '../../css/k/km_nv7h3m.css';
import '../../css/l/lahok-bbv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e3ttebb7p"/><path class="km_nv7h3m"/><path class="lahok-bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:burger-16"} {...others} />);
}

export default Component;
