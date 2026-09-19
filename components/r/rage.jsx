import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/t/tcsfyac_a.css';
import '../../css/f/fb_ijtbgm.css';
import '../../css/z/z7iigyukn.css';
import '../../css/w/wlzju0bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="tcsfyac_a"/><path class="fb_ijtbgm"/><path class="z7iigyukn"/><path class="wlzju0bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:rage"} {...others} />);
}

export default Component;
