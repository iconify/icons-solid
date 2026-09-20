import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxy-jccag.css';
import '../../css/i/i__eb0xll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pxy-jccag"/><path class="i__eb0xll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-type-tsx"} {...others} />);
}

export default Component;
