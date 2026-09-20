import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o23jajbsf.css';
import '../../css/n/nkgnaccau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o23jajbsf"/><path class="nkgnaccau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-exclamation"} {...others} />);
}

export default Component;
