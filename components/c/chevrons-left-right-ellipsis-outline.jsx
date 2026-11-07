import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt_-vrosd.css';
import '../../css/l/lbbxpcczj.css';
import '../../css/e/epcli-bre.css';
import '../../css/r/r7pgarbha.css';
import '../../css/e/enasjubvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt_-vrosd"/><path class="lbbxpcczj"/><path class="epcli-bre"/><path class="r7pgarbha"/><path class="enasjubvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-ellipsis-outline"} {...others} />);
}

export default Component;
