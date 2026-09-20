import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wea5jsbgh.css';
import '../../css/h/hvf9ozjcc.css';
import '../../css/u/ui0132bzo.css';
import '../../css/c/cwdxtdbuh.css';
import '../../css/d/dzhjogbjo.css';
import '../../css/z/zhv_klj0i.css';
import '../../css/j/jl_ypk8ih.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="ft5dv1b6b"><path class="wea5jsbgh"/><path class="hvf9ozjcc"/><path class="ui0132bzo"/><path class="cwdxtdbuh"/><path class="dzhjogbjo"/><path class="zhv_klj0i"/><path class="jl_ypk8ih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:baby-cart-quality"} {...others} />);
}

export default Component;
