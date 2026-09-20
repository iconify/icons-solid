import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tvwa76lwl.css';
import '../../css/c/cwmzxgbha.css';
import '../../css/n/nvif07b4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="tvwa76lwl"/><path class="cwmzxgbha"/><circle class="nvif07b4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-add-light"} {...others} />);
}

export default Component;
