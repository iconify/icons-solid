import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wnplp4blm.css';
import '../../css/a/awg8bub4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wnplp4blm"/><path class="awg8bub4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shopping-bag"} {...others} />);
}

export default Component;
