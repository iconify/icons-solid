import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7yhkcngl.css';
import '../../css/a/at9-cgbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x7yhkcngl"/><circle class="at9-cgbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mouse-left"} {...others} />);
}

export default Component;
