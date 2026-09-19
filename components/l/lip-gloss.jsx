import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/y/yn7lww4xp.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/n/ni1ig64hd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="yn7lww4xp"/><path class="cz-xh6lnw"/><path class="ni1ig64hd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lip-gloss"} {...others} />);
}

export default Component;
