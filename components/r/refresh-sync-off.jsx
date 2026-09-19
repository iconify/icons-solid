import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3vxfob2g.css';

const viewBox = {"width":368,"height":392};
const content = `<path class="g3vxfob2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:refresh-sync-off"} {...others} />);
}

export default Component;
