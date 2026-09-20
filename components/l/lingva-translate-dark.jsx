import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv0x2jbvr.css';
import '../../css/x/xsuq0vbuq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fv0x2jbvr"/><path class="xsuq0vbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lingva-translate-dark"} {...others} />);
}

export default Component;
