import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq3_6fb4a.css';
import '../../css/t/tyf8kebgy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="uq3_6fb4a"/><path clip-rule="evenodd" class="tyf8kebgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-male-0203m"} {...others} />);
}

export default Component;
