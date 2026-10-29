import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm7cvcbaz.css';
import '../../css/e/e36w6ebuc.css';
import '../../css/z/zpvsl_1rm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tm7cvcbaz wm-a"/><path class="e36w6ebuc wm-k"/><path class="wm-k zpvsl_1rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hammer"} {...others} />);
}

export default Component;
