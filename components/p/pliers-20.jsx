import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg6cl-bwp.css';
import '../../css/x/xollm1waj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dg6cl-bwp"/><path class="xollm1waj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pliers-20"} {...others} />);
}

export default Component;
