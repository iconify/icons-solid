import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/v/v3djtrbsu.css';
import '../../css/w/w6vf7jb7x.css';
import '../../css/j/j61sup21m.css';
import '../../css/u/udqd7i92j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="v3djtrbsu"/><path class="w6vf7jb7x"/><path class="j61sup21m"/><path class="udqd7i92j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-fingers"} {...others} />);
}

export default Component;
