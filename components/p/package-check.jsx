import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t_1vmguof.css';
import '../../css/n/n4cavdrlx.css';
import '../../css/g/g-385-cio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t_1vmguof"/><path class="n4cavdrlx"/><path class="g-385-cio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:package-check"} {...others} />);
}

export default Component;
