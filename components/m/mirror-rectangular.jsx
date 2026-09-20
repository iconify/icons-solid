import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zgtl799sz.css';
import '../../css/g/gurl2ypet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zgtl799sz"/><rect class="gurl2ypet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mirror-rectangular"} {...others} />);
}

export default Component;
