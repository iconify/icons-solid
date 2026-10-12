import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgpzpbgqw.css';
import '../../css/g/gbpw5pbes.css';
import '../../css/e/e94t_9b4k.css';
import '../../css/u/uv014d4ug.css';
import '../../css/h/hbp591bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 5.09 3.81)" class="kgpzpbgqw"/><rect transform="matrix(0 1 1 0 5.09 13.85)" class="gbpw5pbes"/><rect transform="matrix(0 1 1 0 5.09 3.81)" class="e94t_9b4k"/><rect transform="matrix(0 1 1 0 5.09 13.85)" class="uv014d4ug"/><path class="hbp591bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:align-left"} {...others} />);
}

export default Component;
