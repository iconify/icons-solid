import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kasx5tbbv.css';
import '../../css/e/eb9kb8jlt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kasx5tbbv"/><path class="eb9kb8jlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:feedback"} {...others} />);
}

export default Component;
