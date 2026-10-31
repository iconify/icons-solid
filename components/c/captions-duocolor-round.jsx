import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xcdeapb2u.css';
import '../../css/y/yd5yxj9_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xcdeapb2u"/><path class="yd5yxj9_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:captions-duocolor-round"} {...others} />);
}

export default Component;
