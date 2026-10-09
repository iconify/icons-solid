import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eru5y1lvr.css';
import '../../css/w/wyrob-bjt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eru5y1lvr"/><path class="wyrob-bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sofa-48-bold"} {...others} />);
}

export default Component;
