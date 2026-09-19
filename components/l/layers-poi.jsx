import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9tbpdr2g.css';
import '../../css/t/tf2al91ur.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k9tbpdr2g"/><path class="tf2al91ur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layers-poi"} {...others} />);
}

export default Component;
