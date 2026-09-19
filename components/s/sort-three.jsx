import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dyexcj6nn.css';
import '../../css/r/rh0hdtl9d.css';
import '../../css/s/syh2afb3b.css';
import '../../css/j/jnuty5b-h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dyexcj6nn"/><path class="rh0hdtl9d"/><path class="syh2afb3b"/><path class="jnuty5b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort-three"} {...others} />);
}

export default Component;
