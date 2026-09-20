import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcxgohb4h.css';
import '../../css/x/xbefkzbox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rcxgohb4h"/><path class="xbefkzbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quire-ink-dark"} {...others} />);
}

export default Component;
