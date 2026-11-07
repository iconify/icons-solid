import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coe7vibui.css';
import '../../css/u/ud8fztbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coe7vibui"/><path clip-rule="evenodd" class="ud8fztbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-ring-outline"} {...others} />);
}

export default Component;
