import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iox4etb0b.css';
import '../../css/l/l7uu1bcrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iox4etb0b"/><path class="l7uu1bcrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:eggs"} {...others} />);
}

export default Component;
