import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhv6agb1d.css';
import '../../css/o/oqcudtb8r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bhv6agb1d"/><path class="oqcudtb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:asset"} {...others} />);
}

export default Component;
