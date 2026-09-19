import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/v/vw-jy7_8n.css';
import '../../css/r/r6bk7gbmf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="xhdah4bbl"/><rect class="vw-jy7_8n"/><path class="r6bk7gbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:powerpoint"} {...others} />);
}

export default Component;
