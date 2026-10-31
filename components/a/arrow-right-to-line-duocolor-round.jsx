import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lppmt7bfa.css';
import '../../css/v/vw22eibqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lppmt7bfa"/><path class="vw22eibqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-right-to-line-duocolor-round"} {...others} />);
}

export default Component;
