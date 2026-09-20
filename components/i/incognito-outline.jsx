import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veo2_hbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="veo2_hbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incognito-outline"} {...others} />);
}

export default Component;
