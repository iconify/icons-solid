import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pie5oxg6b.css';
import '../../css/n/ncqde4bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pie5oxg6b"/><path class="ncqde4bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:settings-sparkle-duocolor-round"} {...others} />);
}

export default Component;
