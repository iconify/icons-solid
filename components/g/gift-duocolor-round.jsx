import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2xwnw-it.css';
import '../../css/c/c0dyaoizv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y2xwnw-it"/><path class="c0dyaoizv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gift-duocolor-round"} {...others} />);
}

export default Component;
