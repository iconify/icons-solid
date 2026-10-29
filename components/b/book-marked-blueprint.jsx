import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yukf-6eye.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/h/ht3319b2c.css';
import '../../css/k/kwybaobhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yukf-6eye"/><path class="rbzq4bjzv wm-deco"/><path class="ht3319b2c wm-k"/><path class="kwybaobhx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-marked-blueprint"} {...others} />);
}

export default Component;
