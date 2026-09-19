import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy7-dkoxi.css';
import '../../css/z/zgd3ifl6g.css';
import '../../css/v/vha_0-yte.css';
import '../../css/j/j2t_tubbx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="sy7-dkoxi"/><path class="zgd3ifl6g"/><path class="vha_0-yte"/><circle class="j2t_tubbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:kitchen-knife"} {...others} />);
}

export default Component;
