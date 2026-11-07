import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npl5ovbfu.css';
import '../../css/u/um_zvyb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npl5ovbfu"/><path clip-rule="evenodd" class="um_zvyb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-add-outline"} {...others} />);
}

export default Component;
