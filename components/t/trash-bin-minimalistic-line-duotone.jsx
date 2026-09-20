import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k52rupvjk.css';
import '../../css/f/fh6a-dbrt.css';
import '../../css/d/d6_3dnf9e.css';
import '../../css/x/xg5_7ua0m.css';
import '../../css/s/s_v9kyb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k52rupvjk"/><path class="fh6a-dbrt"/><path class="d6_3dnf9e"/><path class="xg5_7ua0m"/><path class="s_v9kyb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-line-duotone"} {...others} />);
}

export default Component;
