import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xvzzsg79i.css';
import '../../css/s/sc9_0k_xb.css';
import '../../css/o/onmzq9sqg.css';
import '../../css/p/p908odb-e.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xvzzsg79i"/><path class="sc9_0k_xb wm-shadow"/><path class="onmzq9sqg"/><path class="p908odb-e"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lightbulb-off"} {...others} />);
}

export default Component;
