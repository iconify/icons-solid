import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lg6bw_ihy.css';
import '../../css/l/lraxcbcxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lg6bw_ihy"/><path class="lraxcbcxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:zodiac-sagittarius"} {...others} />);
}

export default Component;
