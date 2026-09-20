import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mw7g6hbqn.css';
import '../../css/i/i5ctgrq3h.css';
import '../../css/e/e6kbp_ktm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mw7g6hbqn"/><path class="i5ctgrq3h"/><circle class="e6kbp_ktm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-search"} {...others} />);
}

export default Component;
