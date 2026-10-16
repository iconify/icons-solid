import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0tcqac0o.css';
import '../../css/i/i0tnlhn3v.css';
import '../../css/k/kogbv5bpe.css';
import '../../css/g/g3cy6zrre.css';
import '../../css/b/bab1vds8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j0tcqac0o"/><rect transform="matrix(-1 0 0 1 14.25 6.8)" class="i0tnlhn3v"/><path class="kogbv5bpe"/><rect transform="matrix(-1 0 0 1 11.41 9.85)" class="g3cy6zrre"/><path class="bab1vds8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:articles"} {...others} />);
}

export default Component;
