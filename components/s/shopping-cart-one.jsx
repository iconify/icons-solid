import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z17pesb7r.css';
import '../../css/t/tq-dgfbkl.css';
import '../../css/y/yw0nv8rst.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="z17pesb7r"/><circle class="tq-dgfbkl"/><path class="yw0nv8rst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shopping-cart-one"} {...others} />);
}

export default Component;
