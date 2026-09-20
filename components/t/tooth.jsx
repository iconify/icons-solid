import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bry_3fl2k.css';
import '../../css/q/qoswwcqeh.css';
import '../../css/d/df5-ntbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bry_3fl2k"/><path class="qoswwcqeh"/><path class="df5-ntbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:tooth"} {...others} />);
}

export default Component;
