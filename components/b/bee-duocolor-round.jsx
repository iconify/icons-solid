import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6t2uhbxh.css';
import '../../css/r/rgizpj_4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q6t2uhbxh"/><path class="rgizpj_4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bee-duocolor-round"} {...others} />);
}

export default Component;
