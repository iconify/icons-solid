import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u11of3imx.css';
import '../../css/k/k8u29ettp.css';
import '../../css/o/ooso77qyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="u11of3imx"/><rect class="k8u29ettp"/><path class="ooso77qyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:app-window"} {...others} />);
}

export default Component;
