import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y70itnb8v.css';
import '../../css/f/fm-ao_bpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y70itnb8v"/><path class="fm-ao_bpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bucket"} {...others} />);
}

export default Component;
