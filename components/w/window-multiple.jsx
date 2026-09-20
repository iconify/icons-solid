import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/an-ms5bht.css';
import '../../css/e/e3m3rbb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="an-ms5bht"/><path class="e3m3rbb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:window-multiple"} {...others} />);
}

export default Component;
