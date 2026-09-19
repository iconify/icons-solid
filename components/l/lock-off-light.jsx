import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/arpu5vbaf.css';
import '../../css/q/q-s4sibmx.css';
import '../../css/b/b_4b31nqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="arpu5vbaf"/><path class="q-s4sibmx"/><path class="b_4b31nqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:lock-off-light"} {...others} />);
}

export default Component;
