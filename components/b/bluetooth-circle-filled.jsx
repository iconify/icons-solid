import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/j/jeg3zq4og.css';
import '../../css/h/hxyvl_b8f.css';
import '../../css/x/x1r3-hbsx.css';
import '../../css/x/x-go-tinw.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGhID5yCPX"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="jeg3zq4og"/><path clip-rule="evenodd" class="hxyvl_b8f"/><path class="x1r3-hbsx"/><path class="x-go-tinw"/></g></mask></defs><circle mask="url(#SVGhID5yCPX)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:bluetooth-circle-filled"} {...others} />);
}

export default Component;
