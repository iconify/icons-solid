import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d9ipvbcrp.css';
import '../../css/d/dfk6wqbuw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path clip-rule="evenodd" class="d9ipvbcrp"/><path class="dfk6wqbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:voice-scan-1"} {...others} />);
}

export default Component;
