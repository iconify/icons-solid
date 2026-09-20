import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/m/maxu92byu.css';
import '../../css/g/g97af6bjk.css';
import '../../css/l/ljbsv7bgi.css';
import '../../css/u/u4-nyzy4h.css';
import '../../css/l/llqew3e1d.css';
import '../../css/p/pb13ynbbp.css';
import '../../css/l/lvd195bpi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="maxu92byu"/><path class="g97af6bjk"/><path class="ljbsv7bgi"/><path class="u4-nyzy4h"/><path class="llqew3e1d"/><path class="pb13ynbbp"/><path class="lvd195bpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:start"} {...others} />);
}

export default Component;
