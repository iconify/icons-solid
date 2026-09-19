import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlr0nk9zs.css';
import '../../css/f/f5j6omq0t.css';
import '../../css/o/ot6bipphv.css';
import '../../css/f/f-_hmccfj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qlr0nk9zs"/><path class="f5j6omq0t"/><path class="ot6bipphv"/><path class="f-_hmccfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:photo-reel"} {...others} />);
}

export default Component;
