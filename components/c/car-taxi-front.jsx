import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zts8ddcqv.css';
import '../../css/v/vo2em-b5e.css';
import '../../css/v/vo4tnbc2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zts8ddcqv"/><rect class="vo2em-b5e"/><path class="vo4tnbc2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:car-taxi-front"} {...others} />);
}

export default Component;
