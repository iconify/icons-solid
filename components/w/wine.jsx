import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/twn8wbbxe.css';
import '../../css/t/tpx0dobaq.css';
import '../../css/h/hwf4h3svl.css';
import '../../css/g/gnimvwbgd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="twn8wbbxe"/><path class="tpx0dobaq"/><path class="hwf4h3svl"/><path class="gnimvwbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wine"} {...others} />);
}

export default Component;
