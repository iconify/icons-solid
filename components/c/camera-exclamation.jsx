import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h71j96b6g.css';
import '../../css/k/k-alowpaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h71j96b6g"/><path class="k-alowpaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-exclamation"} {...others} />);
}

export default Component;
