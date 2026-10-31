import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-uw1xbbx.css';
import '../../css/d/d_xn5l81p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a-uw1xbbx"/><path class="d_xn5l81p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-ordered-duocolor-round"} {...others} />);
}

export default Component;
