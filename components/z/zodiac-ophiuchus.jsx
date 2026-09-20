import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/opwu4psgy.css';
import '../../css/b/blil4ds5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="opwu4psgy"/><path class="blil4ds5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zodiac-ophiuchus"} {...others} />);
}

export default Component;
