import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ny87dobof.css';
import '../../css/g/gtc2uzbxu.css';
import '../../css/d/d8wygibdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ny87dobof"/><circle class="gtc2uzbxu"/><path class="d8wygibdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:chameleon"} {...others} />);
}

export default Component;
