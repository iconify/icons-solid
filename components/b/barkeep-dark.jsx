import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw0azo2px.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uw0azo2px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:barkeep-dark"} {...others} />);
}

export default Component;
