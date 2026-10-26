import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/itl7zlb3o.css';
import '../../css/f/frgqcub5h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="itl7zlb3o"/><path class="frgqcub5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:tulip"} {...others} />);
}

export default Component;
