import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo3g6abcw.css';
import '../../css/w/wvyu5ibqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fo3g6abcw"/><path class="wvyu5ibqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-2-bold"} {...others} />);
}

export default Component;
