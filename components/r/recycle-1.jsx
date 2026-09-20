import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w430v2boa.css';
import '../../css/t/t1b4jiafv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w430v2boa"/><path class="t1b4jiafv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:recycle-1"} {...others} />);
}

export default Component;
