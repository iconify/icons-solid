import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zg838wl4x.css';
import '../../css/x/x46uhub5a.css';
import '../../css/s/ssyurkbyh.css';
import '../../css/l/l-g09iuoa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zg838wl4x"/><path class="x46uhub5a"/><path class="ssyurkbyh"/><path class="l-g09iuoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:one-handed-holding-tablet-handheld"} {...others} />);
}

export default Component;
