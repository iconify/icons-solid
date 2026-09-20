import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/do9r20-0u.css';
import '../../css/e/efwjb3lhi.css';
import '../../css/v/vz9m9abql.css';
import '../../css/q/qc4me0gwf.css';
import '../../css/j/je1j4vbdn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="do9r20-0u"/><path class="efwjb3lhi"/><path class="vz9m9abql"/><path class="qc4me0gwf"/><path class="je1j4vbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:layers-1"} {...others} />);
}

export default Component;
