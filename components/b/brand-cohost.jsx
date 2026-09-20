import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8pujlb6n.css';
import '../../css/v/vff3f-zdf.css';
import '../../css/a/aeo634b6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j8pujlb6n"/><path class="vff3f-zdf"/><path class="aeo634b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-cohost"} {...others} />);
}

export default Component;
