import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx1ngfbkm.css';
import '../../css/n/n6y0s7eue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bx1ngfbkm"/><path class="n6y0s7eue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-3-filled"} {...others} />);
}

export default Component;
