import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvaupzbfa.css';
import '../../css/p/pfv5fvbpd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bvaupzbfa"/><path class="pfv5fvbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:reload-outline"} {...others} />);
}

export default Component;
