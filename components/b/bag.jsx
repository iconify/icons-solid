import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fon8mmv6z.css';
import '../../css/w/w7z6jhbot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="fon8mmv6z"/><path class="w7z6jhbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bag"} {...others} />);
}

export default Component;
