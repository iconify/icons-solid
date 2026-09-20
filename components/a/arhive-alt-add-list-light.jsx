import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c21nnnwjm.css';
import '../../css/c/cwmzxgbha.css';
import '../../css/e/efak_bbhr.css';
import '../../css/j/jhqgpel6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="c21nnnwjm"/><path class="cwmzxgbha"/><path class="efak_bbhr"/><path class="jhqgpel6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-add-list-light"} {...others} />);
}

export default Component;
