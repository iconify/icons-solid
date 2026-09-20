import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqjwjxbml.css';
import '../../css/p/ppg2okbvq.css';
import '../../css/w/wjltsrbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fqjwjxbml"/><path class="ppg2okbvq"/><path class="wjltsrbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:image"} {...others} />);
}

export default Component;
