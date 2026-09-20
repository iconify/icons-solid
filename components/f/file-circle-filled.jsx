import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/o/o2wpyhb8a.css';
import '../../css/y/yz-cuiy2v.css';
import '../../css/t/tu0d1ccex.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGwv1y6nOb"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="o2wpyhb8a"/><path clip-rule="evenodd" class="yz-cuiy2v"/><path class="tu0d1ccex"/></g></mask></defs><circle mask="url(#SVGwv1y6nOb)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:file-circle-filled"} {...others} />);
}

export default Component;
