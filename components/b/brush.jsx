import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6oqjti9j.css';
import '../../css/w/w8-o1rbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r6oqjti9j"/><path class="w8-o1rbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brush"} {...others} />);
}

export default Component;
