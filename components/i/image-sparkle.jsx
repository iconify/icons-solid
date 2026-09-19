import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko66yhb_i.css';
import '../../css/u/uvq16eblf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko66yhb_i"/><path class="uvq16eblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-sparkle"} {...others} />);
}

export default Component;
