import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aigs-vt0v.css';
import '../../css/o/o921o2t3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aigs-vt0v"/><path class="o921o2t3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:github"} {...others} />);
}

export default Component;
