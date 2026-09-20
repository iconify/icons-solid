import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/s/soaayzbjb.css';
import '../../css/g/gf0ksqbal.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="soaayzbjb"/><path class="gf0ksqbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:button-power-1"} {...others} />);
}

export default Component;
