import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar2nxm40s.css';
import '../../css/j/ji-bcsbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ar2nxm40s"/><path class="ji-bcsbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:building"} {...others} />);
}

export default Component;
