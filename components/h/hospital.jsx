import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xspsugb5d.css';
import '../../css/r/re_sue-uy.css';
import '../../css/y/yi86fckoh.css';
import '../../css/b/bbluxmdcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k xspsugb5d"/><path class="re_sue-uy wm-k"/><path class="wm-a yi86fckoh"/><path class="bbluxmdcm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hospital"} {...others} />);
}

export default Component;
