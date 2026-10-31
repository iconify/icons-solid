import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3fzuu1vw.css';
import '../../css/o/oc1leduhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j3fzuu1vw"/><path class="oc1leduhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:share-alt-duocolor-round"} {...others} />);
}

export default Component;
