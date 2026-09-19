import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/e/ewveitspf.css';
import '../../css/a/a3x0wi1cq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ewveitspf"/><path class="a3x0wi1cq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:church-two"} {...others} />);
}

export default Component;
