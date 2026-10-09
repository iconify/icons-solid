import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drz3d56wa.css';
import '../../css/z/z2dsa8b7t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="drz3d56wa"/><path class="z2dsa8b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pliers-20-bold"} {...others} />);
}

export default Component;
