import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/kzfjwrb7m.css';
import '../../css/e/euma87bfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="kzfjwrb7m"/><path class="euma87bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-bubble-square-warning"} {...others} />);
}

export default Component;
