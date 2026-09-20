import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xqe965b4u.css';
import '../../css/z/zb_aymonx.css';
import '../../css/s/s1o7x1bnh.css';
import '../../css/x/x1ujkbcam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xqe965b4u"/><path class="zb_aymonx"/><path class="s1o7x1bnh"/><path class="x1ujkbcam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-coin"} {...others} />);
}

export default Component;
