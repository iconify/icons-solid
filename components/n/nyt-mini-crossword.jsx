import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcsewxa-q.css';
import '../../css/t/t6ojfgbzo.css';
import '../../css/z/zj67j_bqo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zcsewxa-q"/><path class="t6ojfgbzo"/><path class="zj67j_bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-mini-crossword"} {...others} />);
}

export default Component;
