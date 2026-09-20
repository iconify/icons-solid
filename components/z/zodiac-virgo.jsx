import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-mnz9bdo.css';
import '../../css/j/ji42uljfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r-mnz9bdo"/><path class="ji42uljfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zodiac-virgo"} {...others} />);
}

export default Component;
