import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ngs-iwbtv.css';
import '../../css/g/g0fncz2rx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ngs-iwbtv"/><path class="g0fncz2rx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rupee-square"} {...others} />);
}

export default Component;
