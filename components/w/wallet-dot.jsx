import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3uljwbet.css';
import '../../css/v/v4pp43bue.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="g3uljwbet"/><path clip-rule="evenodd" class="v4pp43bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:wallet-dot"} {...others} />);
}

export default Component;
