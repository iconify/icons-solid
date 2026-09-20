import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf2faab1e.css';
import '../../css/h/hevx8wb2o.css';
import '../../css/o/osvywl-4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mf2faab1e"/><path class="hevx8wb2o"/><path class="osvywl-4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lifebuoy-line"} {...others} />);
}

export default Component;
