import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfokd3fxm.css';
import '../../css/j/jmop18yml.css';
import '../../css/y/y4ckp43nh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kfokd3fxm"/><path class="jmop18yml"/><path class="y4ckp43nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hours-fill"} {...others} />);
}

export default Component;
