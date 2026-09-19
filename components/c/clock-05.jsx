import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z25keebkf.css';
import '../../css/n/nuepdeb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z25keebkf"/><path class="nuepdeb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clock-05"} {...others} />);
}

export default Component;
