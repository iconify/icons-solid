import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okn4h4bva.css';
import '../../css/s/sgh8jz96b.css';
import '../../css/y/ycrtwzb4n.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="okn4h4bva"/><path clip-rule="evenodd" class="sgh8jz96b"/><path class="ycrtwzb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:gm"} {...others} />);
}

export default Component;
