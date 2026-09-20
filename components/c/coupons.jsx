import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/q/qe_4tqbgt.css';
import '../../css/r/re8yzr9al.css';
import '../../css/p/p0mvyubwm.css';
import '../../css/j/jbvae9wjs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="qe_4tqbgt"/><path class="re8yzr9al"/><path class="p0mvyubwm"/><path class="jbvae9wjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:coupons"} {...others} />);
}

export default Component;
