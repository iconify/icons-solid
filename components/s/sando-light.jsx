import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo7956bee.css';
import '../../css/f/fq1o6q5xj.css';
import '../../css/j/jq1xa4bul.css';
import '../../css/e/e_r59bb4i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mo7956bee"/><path class="fq1o6q5xj"/><path class="jq1xa4bul"/><path class="e_r59bb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sando-light"} {...others} />);
}

export default Component;
