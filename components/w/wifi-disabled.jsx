import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt_sx46sa.css';
import '../../css/c/cm5dfrb7n.css';
import '../../css/y/yu-xxq-6b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bt_sx46sa"/><path class="cm5dfrb7n"/><path class="yu-xxq-6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wifi-disabled"} {...others} />);
}

export default Component;
