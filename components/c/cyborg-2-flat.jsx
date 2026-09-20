import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7go1fb5x.css';
import '../../css/f/fzgjf1dzl.css';
import '../../css/g/g6iekibyn.css';
import '../../css/e/e--upmbom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t7go1fb5x"/><path class="fzgjf1dzl"/><path class="g6iekibyn"/><path clip-rule="evenodd" class="e--upmbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cyborg-2-flat"} {...others} />);
}

export default Component;
