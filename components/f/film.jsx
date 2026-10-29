import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5briyboj.css';
import '../../css/g/gpd9rhb5a.css';
import '../../css/v/v29mhxdxb.css';
import '../../css/x/x7lhwctsf.css';
import '../../css/x/xrkm9q2dt.css';
import '../../css/h/h1wocxbko.css';
import '../../css/w/w24cs5i6o.css';
import '../../css/w/wonaejn2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i5briyboj wm-k"/><path class="gpd9rhb5a wm-k"/><path class="v29mhxdxb wm-k"/><path class="wm-k x7lhwctsf"/><path class="wm-a xrkm9q2dt"/><path class="h1wocxbko wm-a"/><path class="w24cs5i6o wm-a"/><path class="wm-shine wonaejn2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:film"} {...others} />);
}

export default Component;
