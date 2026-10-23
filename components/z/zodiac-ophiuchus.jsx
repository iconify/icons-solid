import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlew1kcbr.css';
import '../../css/s/s7g6nsbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mlew1kcbr"/><path class="s7g6nsbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:zodiac-ophiuchus"} {...others} />);
}

export default Component;
