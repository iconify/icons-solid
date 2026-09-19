import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/m/m5atj7b7d.css';
import '../../css/h/hjisqlb_t.css';
import '../../css/w/w7n07nbhl.css';
import '../../css/j/j5l3cjbcg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="m5atj7b7d"/><path class="hjisqlb_t"/><path class="w7n07nbhl"/><path class="j5l3cjbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:new-picture"} {...others} />);
}

export default Component;
