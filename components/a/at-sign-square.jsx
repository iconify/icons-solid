import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w96sr1g7k.css';
import '../../css/u/u1j3jebhk.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="w96sr1g7k"/><path class="u1j3jebhk"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:at-sign-square"} {...others} />);
}

export default Component;
