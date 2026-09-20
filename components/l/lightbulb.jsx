import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r87-mbbfe.css';
import '../../css/e/e6p_55blb.css';
import '../../css/m/mbtw7xbql.css';
import '../../css/d/dooba1b7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="r87-mbbfe"/><path class="e6p_55blb"/><path class="mbtw7xbql"/><path class="dooba1b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lightbulb"} {...others} />);
}

export default Component;
