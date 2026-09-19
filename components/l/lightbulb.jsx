import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2wwdgbqt.css';
import '../../css/u/urnoeq_4m.css';
import '../../css/p/p10ri4jie.css';
import '../../css/s/sy480ch8s.css';
import '../../css/d/dods1ebkl.css';
import '../../css/z/zqe9ihy7a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u2wwdgbqt"/><path class="urnoeq_4m"/><path class="p10ri4jie"/><path class="sy480ch8s"/><path class="dods1ebkl"/><path class="zqe9ihy7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lightbulb"} {...others} />);
}

export default Component;
