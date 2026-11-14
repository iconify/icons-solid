import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/embllvbye.css';
import '../../css/d/dhj2y65kq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="embllvbye"/><path class="dhj2y65kq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:sparkles"} {...others} />);
}

export default Component;
