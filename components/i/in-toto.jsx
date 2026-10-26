import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m56wcnbmc.css';

const viewBox = {"width":366.08,"height":298.83,"left":-3.29,"top":29.96};
const content = `<path class="m56wcnbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:in-toto"} {...others} />);
}

export default Component;
