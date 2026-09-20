import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9_kthb0l.css';
import '../../css/i/ian165b6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w9_kthb0l"/><path class="ian165b6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headphones-fill"} {...others} />);
}

export default Component;
