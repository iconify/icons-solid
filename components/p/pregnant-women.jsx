import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fp3c5nb-j.css';
import '../../css/b/bogyxub1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="fp3c5nb-j"/><path class="bogyxub1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pregnant-women"} {...others} />);
}

export default Component;
