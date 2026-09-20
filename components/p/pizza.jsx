import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyl42ccmq.css';
import '../../css/u/udz8ecb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fyl42ccmq"/><path class="udz8ecb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pizza"} {...others} />);
}

export default Component;
