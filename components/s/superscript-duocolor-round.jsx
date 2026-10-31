import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sm1k5x4xf.css';
import '../../css/f/fxwoyf6jx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sm1k5x4xf"/><path class="fxwoyf6jx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:superscript-duocolor-round"} {...others} />);
}

export default Component;
