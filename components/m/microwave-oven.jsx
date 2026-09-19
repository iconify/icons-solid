import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjawsos1p.css';
import '../../css/q/qsyvbtbcu.css';
import '../../css/j/j0zsirbgl.css';
import '../../css/w/whg4aks8m.css';
import '../../css/m/mmjblgbjx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="tjawsos1p"/><path class="qsyvbtbcu"/><path class="j0zsirbgl"/><circle class="whg4aks8m"/><path class="mmjblgbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:microwave-oven"} {...others} />);
}

export default Component;
