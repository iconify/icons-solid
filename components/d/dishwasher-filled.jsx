import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjk_cab6w.css';
import '../../css/p/po-pxqb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjk_cab6w"/><path class="po-pxqb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dishwasher-filled"} {...others} />);
}

export default Component;
