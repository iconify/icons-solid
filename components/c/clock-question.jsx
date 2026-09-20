import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9-sfsv6s.css';
import '../../css/g/g2lb_gbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f9-sfsv6s"/><path class="g2lb_gbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-question"} {...others} />);
}

export default Component;
