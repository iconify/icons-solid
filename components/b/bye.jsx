import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/y/ykn9kmspw.css';
import '../../css/m/muwu43bhw.css';
import '../../css/d/d2h2e9b4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ykn9kmspw"/><path class="muwu43bhw"/><path class="d2h2e9b4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bye"} {...others} />);
}

export default Component;
