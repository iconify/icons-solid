import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-l11-55q.css';
import '../../css/y/yyrf-ibdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a-l11-55q"/><path class="yyrf-ibdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-sparkle-duocolor-round"} {...others} />);
}

export default Component;
