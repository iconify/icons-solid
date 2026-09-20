import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx_xolb0l.css';
import '../../css/n/nfhumnbud.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dx_xolb0l"/><path class="nfhumnbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:technitium"} {...others} />);
}

export default Component;
