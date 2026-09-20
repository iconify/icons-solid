import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/j/jkn3mwb8x.css';
import '../../css/b/b-87849ai.css';
import '../../css/q/qrjnqi0kg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="jkn3mwb8x"/><path class="b-87849ai"/><path class="qrjnqi0kg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:no-poverty"} {...others} />);
}

export default Component;
