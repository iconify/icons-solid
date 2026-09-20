import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t8hqqactl.css';
import '../../css/f/fp_66358b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t8hqqactl"/><path class="fp_66358b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:megaphone"} {...others} />);
}

export default Component;
