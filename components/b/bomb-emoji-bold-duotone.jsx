import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v1i9zeb3v.css';
import '../../css/q/q27aehs6m.css';
import '../../css/c/c19b5er9z.css';
import '../../css/b/b0vv5obgp.css';
import '../../css/s/srywuwbjt.css';
import '../../css/s/s9dluyubb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v1i9zeb3v"/><path class="q27aehs6m"/></g><path class="c19b5er9z"/><path class="b0vv5obgp"/><path class="srywuwbjt"/><path class="s9dluyubb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-bold-duotone"} {...others} />);
}

export default Component;
