import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdasxcb6b.css';
import '../../css/m/mfwbafjts.css';
import '../../css/e/enivjqk_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdasxcb6b"/><path class="mfwbafjts"/><path class="enivjqk_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:text-formating-rotate-vertical"} {...others} />);
}

export default Component;
