import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdf8vni2w.css';
import '../../css/k/ka0y_qb6x.css';
import '../../css/g/g6llgnykv.css';
import '../../css/i/ib6autsjx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qdf8vni2w"/><path class="ka0y_qb6x"/><path class="g6llgnykv"/><path class="ib6autsjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:chrome-solid"} {...others} />);
}

export default Component;
