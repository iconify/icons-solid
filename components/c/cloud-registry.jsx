import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-y7l7lfv.css';
import '../../css/x/xtad_yvwf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p-y7l7lfv"/><path class="xtad_yvwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-registry"} {...others} />);
}

export default Component;
