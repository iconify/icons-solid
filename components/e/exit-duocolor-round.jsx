import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkn535btd.css';
import '../../css/f/fbhc8jzlr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tkn535btd"/><path class="fbhc8jzlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:exit-duocolor-round"} {...others} />);
}

export default Component;
