import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2gr80ila.css';
import '../../css/b/bf7k9h4pi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u2gr80ila"/><path class="bf7k9h4pi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:peach"} {...others} />);
}

export default Component;
