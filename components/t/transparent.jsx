import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/ju-031bnu.css';
import '../../css/m/ml_l7u_yh.css';
import '../../css/x/x_tmd2c4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ju-031bnu"/><path class="ml_l7u_yh"/><path class="x_tmd2c4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:transparent"} {...others} />);
}

export default Component;
