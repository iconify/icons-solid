import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aztql-b4w.css';
import '../../css/l/lvoahibxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aztql-b4w"/><path class="lvoahibxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rotate-right-duocolor-round"} {...others} />);
}

export default Component;
