import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rz8zezu5f.css';
import '../../css/b/bvrootbcu.css';
import '../../css/h/hfrppyb3s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="s9cl3zbei"><path class="rz8zezu5f"/><path class="bvrootbcu"/><path class="hfrppyb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:speedometer-3"} {...others} />);
}

export default Component;
