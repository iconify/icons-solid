import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nc1h4zb3b.css';
import '../../css/k/kxkkrtbdg.css';
import '../../css/j/jvue64i5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nc1h4zb3b"/><path class="kxkkrtbdg"/><path class="jvue64i5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fish"} {...others} />);
}

export default Component;
