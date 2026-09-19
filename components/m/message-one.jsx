import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fne_itbht.css';
import '../../css/t/tele8ebjz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="fne_itbht"/><path class="tele8ebjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:message-one"} {...others} />);
}

export default Component;
