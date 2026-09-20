import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pb3h7wrlx.css';
import '../../css/c/cf16i906o.css';
import '../../css/l/lobx3hszy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pb3h7wrlx"/><path class="cf16i906o"/><path class="lobx3hszy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:controller-wireless"} {...others} />);
}

export default Component;
