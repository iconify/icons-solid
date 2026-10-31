import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wp820wbfk.css';
import '../../css/z/zxk7_zbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wp820wbfk"/><path class="zxk7_zbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-more-vertical-duocolor-round"} {...others} />);
}

export default Component;
