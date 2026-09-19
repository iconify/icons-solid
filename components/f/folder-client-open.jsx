import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/s/sjw0sabcu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><path class="sjw0sabcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-client-open"} {...others} />);
}

export default Component;
