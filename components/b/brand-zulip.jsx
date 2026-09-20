import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-ebu3gcb.css';
import '../../css/l/lp9te75in.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r-ebu3gcb"/><path class="lp9te75in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-zulip"} {...others} />);
}

export default Component;
