import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/a/aqyo1ebes.css';
import '../../css/c/cnn1t1ysc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="aqyo1ebes"/><path class="cnn1t1ysc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:nfc-outline"} {...others} />);
}

export default Component;
