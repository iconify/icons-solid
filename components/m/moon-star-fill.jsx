import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/btis9lbsd.css';
import '../../css/q/q41if-b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="btis9lbsd"/><path class="q41if-b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:moon-star-fill"} {...others} />);
}

export default Component;
