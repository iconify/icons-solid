import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgnl85bbd.css';
import '../../css/y/ymlv-abhc.css';
import '../../css/h/heznmzwkn.css';
import '../../css/b/bdz_3cc9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgnl85bbd wm-k"/><path class="wm-k ymlv-abhc"/><path class="heznmzwkn wm-a"/><path class="bdz_3cc9g wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:home"} {...others} />);
}

export default Component;
