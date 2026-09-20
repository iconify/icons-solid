import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uynwflb5l.css';
import '../../css/f/f-ypa7iae.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="uynwflb5l"/><path clip-rule="evenodd" class="f-ypa7iae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:colour-palette-3"} {...others} />);
}

export default Component;
