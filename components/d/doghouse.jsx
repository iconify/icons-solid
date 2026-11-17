import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2g-4c6ba.css';
import '../../css/e/edcudcbia.css';
import '../../css/i/ijlscf07j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j2g-4c6ba"/><path class="edcudcbia"/><path class="ijlscf07j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:doghouse"} {...others} />);
}

export default Component;
