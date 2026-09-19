import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbq83e2fr.css';
import '../../css/h/ho8hjnb3u.css';
import '../../css/s/sybk1uw8d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbq83e2fr"/><path class="ho8hjnb3u"/><path class="sybk1uw8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dolphin"} {...others} />);
}

export default Component;
