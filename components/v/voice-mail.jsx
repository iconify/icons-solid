import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/di133lvbl.css';
import '../../css/r/ro-_eyvas.css';
import '../../css/s/sbd2rvcya.css';
import '../../css/l/lkj9n1fkc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="di133lvbl"/><path class="ro-_eyvas"/><path class="sbd2rvcya"/><path class="lkj9n1fkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:voice-mail"} {...others} />);
}

export default Component;
