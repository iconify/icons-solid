import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aonepje_a.css';
import '../../css/h/h0wavjb7c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aonepje_a"/><path class="h0wavjb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:prosody"} {...others} />);
}

export default Component;
