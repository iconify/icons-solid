import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrwnz618c.css';
import '../../css/t/tpid-l5mc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mrwnz618c"/><path class="tpid-l5mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:album"} {...others} />);
}

export default Component;
