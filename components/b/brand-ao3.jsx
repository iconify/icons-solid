import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9cc3dbxr.css';
import '../../css/z/z5r5j9b0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u9cc3dbxr"/><path class="z5r5j9b0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-ao3"} {...others} />);
}

export default Component;
