import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vofooj_ct.css';
import '../../css/j/js9spn1lw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vofooj_ct"/><path class="js9spn1lw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-banknote-off"} {...others} />);
}

export default Component;
