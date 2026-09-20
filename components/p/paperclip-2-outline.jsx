import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ths0tvdky.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ths0tvdky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paperclip-2-outline"} {...others} />);
}

export default Component;
