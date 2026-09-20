import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aye465brx.css';
import '../../css/u/uvd9ibb-v.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGBKAjgbpR"><path clip-rule="evenodd" class="aye465brx"/><path class="uvd9ibb-v"/></mask></defs><path mask="url(#SVGBKAjgbpR)" class="w49j0rbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:facebook-rounded"} {...others} />);
}

export default Component;
