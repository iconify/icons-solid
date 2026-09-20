import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fn-pn3iwr.css';
import '../../css/i/ivc1evbro.css';
import '../../css/j/j6vd_eyyg.css';
import '../../css/t/tg567gbbd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fn-pn3iwr"/><path class="ivc1evbro"/><path class="j6vd_eyyg"/><path class="tg567gbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:delete-row"} {...others} />);
}

export default Component;
