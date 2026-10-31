import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f77qxutat.css';
import '../../css/f/f1xa8sbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f77qxutat"/><path class="f1xa8sbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:carrot-duocolor-round"} {...others} />);
}

export default Component;
