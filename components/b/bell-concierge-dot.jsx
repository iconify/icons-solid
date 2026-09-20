import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8oytbfhn.css';
import '../../css/f/f58fg730b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="b8oytbfhn"/><path class="f58fg730b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bell-concierge-dot"} {...others} />);
}

export default Component;
