import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1en6s9ki.css';
import '../../css/i/i1w9302al.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g1en6s9ki"/><path class="i1w9302al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-revolut"} {...others} />);
}

export default Component;
