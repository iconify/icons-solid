import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi50_ecyu.css';
import '../../css/m/my8yzv9ss.css';
import '../../css/l/luip11i6o.css';
import '../../css/d/dj_15obqp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fi50_ecyu"/><path class="my8yzv9ss"/><g><path class="luip11i6o"/><path class="dj_15obqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-contacts"} {...others} />);
}

export default Component;
