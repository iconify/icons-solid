import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/w3l99hu8u.css';
import '../../css/x/x4ahrcbha.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="w3l99hu8u"/><path class="x4ahrcbha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:add-two"} {...others} />);
}

export default Component;
