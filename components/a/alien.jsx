import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vvtc2vb0w.css';
import '../../css/v/vn660gjza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vvtc2vb0w"/><path class="vn660gjza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:alien"} {...others} />);
}

export default Component;
