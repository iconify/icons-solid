import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9uj1qboq.css';
import '../../css/g/g8klr6byk.css';
import '../../css/m/mu_an1rnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f9uj1qboq"/><path class="g8klr6byk"/><path class="mu_an1rnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-txt"} {...others} />);
}

export default Component;
