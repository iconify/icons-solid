import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uci5wiu_k.css';
import '../../css/r/r87pkpb3r.css';
import '../../css/f/f8i9k6bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uci5wiu_k"/><path class="r87pkpb3r"/><path class="f8i9k6bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:symptoms-virus-diarrhea-2"} {...others} />);
}

export default Component;
