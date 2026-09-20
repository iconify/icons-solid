import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oz11ljp7h.css';
import '../../css/h/hj3iobcdb.css';
import '../../css/y/yitsn-brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oz11ljp7h"/><path class="hj3iobcdb"/><path class="yitsn-brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sticker-smile"} {...others} />);
}

export default Component;
