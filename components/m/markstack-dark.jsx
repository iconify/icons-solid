import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e634y07gb.css';
import '../../css/w/wl3arebmb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e634y07gb"/><path class="wl3arebmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:markstack-dark"} {...others} />);
}

export default Component;
