import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l9ut5ilwr.css';
import '../../css/f/fojsc7d2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l9ut5ilwr"/><path class="fojsc7d2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-duocolor-round"} {...others} />);
}

export default Component;
