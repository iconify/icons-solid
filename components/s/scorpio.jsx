import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/uwxf-9bdi.css';
import '../../css/b/b37zczghe.css';
import '../../css/p/pc7o77bzi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="uwxf-9bdi"/><path class="b37zczghe"/><path class="pc7o77bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:scorpio"} {...others} />);
}

export default Component;
