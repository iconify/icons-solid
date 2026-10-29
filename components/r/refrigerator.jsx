import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo2kww2oc.css';
import '../../css/m/mnb9ye_jk.css';
import '../../css/i/i3ywqmbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo2kww2oc wm-k"/><path class="mnb9ye_jk wm-k"/><path class="i3ywqmbxr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:refrigerator"} {...others} />);
}

export default Component;
