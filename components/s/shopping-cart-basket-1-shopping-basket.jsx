import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pydkrm17a.css';
import '../../css/a/a989ejbdj.css';
import '../../css/l/lxyi6i7oj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pydkrm17a"/><path class="a989ejbdj"/><path class="lxyi6i7oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-cart-basket-1-shopping-basket"} {...others} />);
}

export default Component;
