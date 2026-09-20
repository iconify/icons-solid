import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3z_iybqn.css';
import '../../css/f/fktkktbrf.css';
import '../../css/f/f8nlp98qe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e3z_iybqn"/><circle class="fktkktbrf"/><path clip-rule="evenodd" class="f8nlp98qe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-photography"} {...others} />);
}

export default Component;
