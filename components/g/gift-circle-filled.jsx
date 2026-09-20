import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/d-vnzkvhk.css';
import '../../css/q/q069o1bak.css';
import '../../css/z/zudxtebic.css';
import '../../css/n/nsqpiacms.css';
import '../../css/f/fgjwwczuh.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGm9aseBGj"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="d-vnzkvhk"/><path class="q069o1bak"/><path class="zudxtebic"/><path clip-rule="evenodd" class="nsqpiacms"/><path clip-rule="evenodd" class="fgjwwczuh"/></g></mask></defs><circle mask="url(#SVGm9aseBGj)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:gift-circle-filled"} {...others} />);
}

export default Component;
