import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l890h-b3u.css';
import '../../css/y/yml010bne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="l890h-b3u"/><path class="yml010bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tub"} {...others} />);
}

export default Component;
