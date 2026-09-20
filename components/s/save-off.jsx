import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6ojaub1h.css';
import '../../css/i/il468kbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k6ojaub1h"/><path class="il468kbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:save-off"} {...others} />);
}

export default Component;
