import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faejj4scx.css';
import '../../css/s/s6m9h_p1k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="faejj4scx"/><path clip-rule="evenodd" class="s6m9h_p1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:virus-antivirus-solid"} {...others} />);
}

export default Component;
