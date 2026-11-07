import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_en--b-n.css';
import '../../css/w/wru8zmbec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_en--b-n"/><path clip-rule="evenodd" class="wru8zmbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-smile-angle-outline"} {...others} />);
}

export default Component;
