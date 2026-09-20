import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pfec3bieo.css';
import '../../css/w/wwjitibix.css';
import '../../css/q/q78cf5bqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="pfec3bieo"/><path class="wwjitibix"/><path class="q78cf5bqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:owl"} {...others} />);
}

export default Component;
