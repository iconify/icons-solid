import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d_36mfbfe.css';
import '../../css/j/j937vebeo.css';
import '../../css/f/fjzl3b15u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d_36mfbfe"/><rect class="j937vebeo"/><path class="fjzl3b15u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:briefcase-plus"} {...others} />);
}

export default Component;
