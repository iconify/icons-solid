import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn5coccyh.css';
import '../../css/p/p0jx8e9jq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xn5coccyh"/><path class="p0jx8e9jq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:library-duocolor-round"} {...others} />);
}

export default Component;
