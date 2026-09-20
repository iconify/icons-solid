import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mbc0o4byy.css';
import '../../css/j/jf-djzbhp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="mbc0o4byy"/><path class="jf-djzbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:drum-stick"} {...others} />);
}

export default Component;
