import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f29d-jc1h.css';
import '../../css/w/wzh6a6bgy.css';
import '../../css/t/tm_supbzi.css';
import '../../css/a/a714r4rwc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f29d-jc1h"/><path class="wzh6a6bgy"/><path class="tm_supbzi"/><path class="a714r4rwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:megaphone-refresh"} {...others} />);
}

export default Component;
