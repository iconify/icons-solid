import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mcv_3obvg.css';
import '../../css/z/z0oqk_b7p.css';
import '../../css/a/a1ecnmvsy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="mcv_3obvg"/><path class="z0oqk_b7p"/><path class="a1ecnmvsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:top-order-report"} {...others} />);
}

export default Component;
