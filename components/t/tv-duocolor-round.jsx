import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uiw7oy0ik.css';
import '../../css/u/uk9irlbgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uiw7oy0ik"/><path class="uk9irlbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tv-duocolor-round"} {...others} />);
}

export default Component;
