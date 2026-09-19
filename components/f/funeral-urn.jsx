import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/winqsjo_v.css';
import '../../css/f/ff_8d4bcz.css';
import '../../css/z/zsi7ldiai.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="winqsjo_v"/><path class="ff_8d4bcz"/><path class="zsi7ldiai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:funeral-urn"} {...others} />);
}

export default Component;
