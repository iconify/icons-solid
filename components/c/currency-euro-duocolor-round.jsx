import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u3esjiziv.css';
import '../../css/g/gxzraf6oz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u3esjiziv"/><path class="gxzraf6oz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-euro-duocolor-round"} {...others} />);
}

export default Component;
