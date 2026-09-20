import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gurl2ypet.css';
import '../../css/b/b2mfdw61j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="gurl2ypet"/><path class="b2mfdw61j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calculator"} {...others} />);
}

export default Component;
