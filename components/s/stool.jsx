import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l4rak7ahq.css';
import '../../css/u/u6j-mzbyg.css';
import '../../css/h/h3bkf6bec.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l4rak7ahq"/><path class="u6j-mzbyg"/><path class="h3bkf6bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stool"} {...others} />);
}

export default Component;
