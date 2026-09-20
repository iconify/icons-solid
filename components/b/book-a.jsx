import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ot8yzyb7e.css';
import '../../css/n/nfyt8ac1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ot8yzyb7e"/><path class="nfyt8ac1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-a"} {...others} />);
}

export default Component;
