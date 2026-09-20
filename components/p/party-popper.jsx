import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy0g-ybmj.css';
import '../../css/k/kdt1xvb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zy0g-ybmj"/><path class="kdt1xvb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:party-popper"} {...others} />);
}

export default Component;
