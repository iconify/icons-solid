import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k45hr2bcn.css';
import '../../css/s/s5o6kpbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="k45hr2bcn"/><path class="s5o6kpbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:anchor"} {...others} />);
}

export default Component;
