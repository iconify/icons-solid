import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uyiftqbnc.css';
import '../../css/q/qj9ejwyor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="uyiftqbnc"/><path class="qj9ejwyor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:microphone"} {...others} />);
}

export default Component;
