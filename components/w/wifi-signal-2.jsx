import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bp8o4e48l.css';
import '../../css/a/aimb84bag.css';
import '../../css/p/pkzm03h6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bp8o4e48l"/><path class="aimb84bag"/><path class="pkzm03h6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-signal-2"} {...others} />);
}

export default Component;
