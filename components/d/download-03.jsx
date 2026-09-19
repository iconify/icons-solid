import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z9o5dkevl.css';
import '../../css/g/g8hgixcvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z9o5dkevl"/><path class="g8hgixcvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:download-03"} {...others} />);
}

export default Component;
