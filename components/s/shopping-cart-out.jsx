import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzr3p0u5j.css';
import '../../css/z/zpre3qdjm.css';
import '../../css/g/g92qnxb9i.css';
import '../../css/h/ho0rl5ler.css';
import '../../css/q/qidc0bqma.css';
import '../../css/t/t1kees0di.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vzr3p0u5j"/><path class="zpre3qdjm"/><path class="g92qnxb9i"/><circle transform="rotate(90 8.25 19.11)" class="ho0rl5ler"/><circle transform="rotate(90 17.27 19.11)" class="qidc0bqma"/><path class="t1kees0di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shopping-cart-out"} {...others} />);
}

export default Component;
