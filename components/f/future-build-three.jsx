import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/t63s_2bom.css';
import '../../css/j/jgis4oxgw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="t63s_2bom"/><path class="jgis4oxgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:future-build-three"} {...others} />);
}

export default Component;
