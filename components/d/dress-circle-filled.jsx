import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/i/irtz-mbtm.css';
import '../../css/b/b_tcflriy.css';
import '../../css/e/eyx4rub6w.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGxAMppF8k"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="irtz-mbtm"/><path clip-rule="evenodd" class="b_tcflriy"/><path class="eyx4rub6w"/></g></mask></defs><circle mask="url(#SVGxAMppF8k)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:dress-circle-filled"} {...others} />);
}

export default Component;
