import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebbapmbde.css';
import '../../css/t/tfv7onber.css';
import '../../css/n/n-3ls8adj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ebbapmbde"/><rect transform="rotate(90 21.42 9.09)" class="tfv7onber"/><rect transform="rotate(90 21.42 9.09)" class="n-3ls8adj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-insert-image-center"} {...others} />);
}

export default Component;
