import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgagmabqs.css';
import '../../css/j/j8zujtqfh.css';
import '../../css/h/h5nldhwxg.css';
import '../../css/f/fqjqpsb6x.css';
import '../../css/r/rmp_-0b0j.css';
import '../../css/l/lohpef_mq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qgagmabqs"/><path class="j8zujtqfh"/><path class="h5nldhwxg"/><path class="fqjqpsb6x"/><path class="rmp_-0b0j"/><path class="lohpef_mq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:headset-2-duo"} {...others} />);
}

export default Component;
