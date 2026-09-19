import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j6lt18b5y.css';
import '../../css/s/sv6uwwbpt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="j6lt18b5y"/><path class="sv6uwwbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shovel-one"} {...others} />);
}

export default Component;
