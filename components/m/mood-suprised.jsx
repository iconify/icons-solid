import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-xl5827d.css';
import '../../css/p/pa2ir-bee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y-xl5827d"/><path class="pa2ir-bee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-suprised"} {...others} />);
}

export default Component;
