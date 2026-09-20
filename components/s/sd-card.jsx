import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rbofx0baq.css';
import '../../css/d/d6jtgub7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rbofx0baq"/><path class="d6jtgub7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sd-card"} {...others} />);
}

export default Component;
