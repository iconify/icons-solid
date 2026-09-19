import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/e/en4rke54j.css';
import '../../css/n/n4-moed9v.css';
import '../../css/i/ijo2s9bfw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="en4rke54j"/><path class="n4-moed9v"/><rect class="ijo2s9bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:distribute-vertical-spacing"} {...others} />);
}

export default Component;
