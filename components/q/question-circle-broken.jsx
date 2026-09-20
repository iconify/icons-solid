import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iwfsg6b7f.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iwfsg6b7f"/><path class="ko6o-6b9b"/><path class="pr1jznbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-circle-broken"} {...others} />);
}

export default Component;
