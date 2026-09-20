import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unc2embyj.css';
import '../../css/j/j2l72bb1a.css';
import '../../css/k/kv5hm5h9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="unc2embyj"><path class="j2l72bb1a"/><path class="kv5hm5h9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stop-and-play-duotone"} {...others} />);
}

export default Component;
