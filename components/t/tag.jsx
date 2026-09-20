import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bihy864ah.css';
import '../../css/m/mq84a6btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bihy864ah"/><path class="mq84a6btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tag"} {...others} />);
}

export default Component;
