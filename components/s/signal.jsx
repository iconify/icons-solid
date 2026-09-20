import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-byqmv3j.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j-byqmv3j"/><path class="dno4_nblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal"} {...others} />);
}

export default Component;
