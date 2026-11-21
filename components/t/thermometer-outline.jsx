import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvg43muth.css';
import '../../css/h/hkazuhb3h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kvg43muth"/><circle class="hkazuhb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thermometer-outline"} {...others} />);
}

export default Component;
