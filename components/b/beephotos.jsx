import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3xdyvzhs.css';
import '../../css/m/m--ipvi-j.css';
import '../../css/g/gch5xlsgc.css';
import '../../css/b/b1__pbbes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m3xdyvzhs"/><path class="m--ipvi-j"/><path class="gch5xlsgc"/><path class="b1__pbbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beephotos"} {...others} />);
}

export default Component;
