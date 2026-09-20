import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux_-a_76x.css';
import '../../css/h/hdul03-0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ux_-a_76x"/><path clip-rule="evenodd" class="hdul03-0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:emoji-smile-sunglass"} {...others} />);
}

export default Component;
