import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_y26382c.css';
import '../../css/d/dhi_ht-9o.css';
import '../../css/x/xud0o8o1f.css';
import '../../css/u/udd3bbc2x.css';
import '../../css/d/dv9hf9zlc.css';
import '../../css/m/m1xxer0fr.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s_y26382c"/><circle class="dhi_ht-9o"/><path class="xud0o8o1f"/><g class="udd3bbc2x"><circle class="s_y26382c"/><circle class="dhi_ht-9o"/></g><path class="dv9hf9zlc"/><path class="m1xxer0fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:skateboard"} {...others} />);
}

export default Component;
