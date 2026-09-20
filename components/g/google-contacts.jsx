import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5skjynkm.css';
import '../../css/h/h6v6gtwle.css';
import '../../css/t/txlc9qs6o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e5skjynkm"/><path class="h6v6gtwle"/><path class="txlc9qs6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-contacts"} {...others} />);
}

export default Component;
