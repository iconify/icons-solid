import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xb045b7ja.css';
import '../../css/r/rb77lkb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xb045b7ja"/><path class="rb77lkb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heading-5-duocolor-round"} {...others} />);
}

export default Component;
