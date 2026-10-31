import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfwl-6rai.css';
import '../../css/p/p-xswwuam.css';
import '../../css/v/vzm4z_6wm.css';
import '../../css/t/tkrh4u31z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jfwl-6rai"/><path class="p-xswwuam"/><path class="vzm4z_6wm"/><path class="tkrh4u31z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:beef"} {...others} />);
}

export default Component;
