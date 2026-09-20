import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e5xrwlbat.css';
import '../../css/p/pahsu6r_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e5xrwlbat"/><path class="pahsu6r_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-wikipedia"} {...others} />);
}

export default Component;
