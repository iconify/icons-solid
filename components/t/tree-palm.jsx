import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/im48xinii.css';
import '../../css/h/hc0su0byg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="im48xinii"/><path class="hc0su0byg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tree-palm"} {...others} />);
}

export default Component;
