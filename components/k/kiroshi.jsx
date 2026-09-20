import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koehhbc9o.css';
import '../../css/w/wqypsdb2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="koehhbc9o"/><path class="wqypsdb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kiroshi"} {...others} />);
}

export default Component;
