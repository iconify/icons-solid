import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmzq-6n5j.css';
import '../../css/a/a8p4l9b4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lmzq-6n5j"/><path class="a8p4l9b4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed-single-two-tone"} {...others} />);
}

export default Component;
