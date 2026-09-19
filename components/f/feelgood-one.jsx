import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/tj_d2_jcu.css';
import '../../css/w/w8l_5lbsg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="tj_d2_jcu"/><path class="w8l_5lbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:feelgood-one"} {...others} />);
}

export default Component;
