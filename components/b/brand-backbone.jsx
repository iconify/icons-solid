import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/soku-ohae.css';
import '../../css/b/b0jj03m0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="soku-ohae"/><path class="b0jj03m0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-backbone"} {...others} />);
}

export default Component;
