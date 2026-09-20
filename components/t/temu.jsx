import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm8pbtlmi.css';
import '../../css/l/liz4x11yp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pm8pbtlmi"/><path class="liz4x11yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:temu"} {...others} />);
}

export default Component;
