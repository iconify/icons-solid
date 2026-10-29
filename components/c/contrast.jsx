import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqhi_415b.css';
import '../../css/m/m5tofki6k.css';
import '../../css/b/bv6wucbyg.css';
import '../../css/c/chaaqcc_c.css';
import '../../css/m/mxpsyukzm.css';
import '../../css/h/h44b7nxuh.css';
import '../../css/u/u8fg7absb.css';
import '../../css/z/z9zpaqb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yqhi_415b"/><path class="m5tofki6k wm-k"/><path class="bv6wucbyg wm-k"/><path class="chaaqcc_c wm-a"/><path class="mxpsyukzm wm-a"/><path class="h44b7nxuh wm-a"/><path class="u8fg7absb wm-a"/><path class="wm-a z9zpaqb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:contrast"} {...others} />);
}

export default Component;
