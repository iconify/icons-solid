import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2axamk9n.css';
import '../../css/k/k9eyo1h_u.css';
import '../../css/a/amfdxgb4w.css';
import '../../css/q/q79nj4brv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="p2axamk9n"/><circle class="k9eyo1h_u"/><path class="amfdxgb4w"/><path class="q79nj4brv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shopping-cart-one"} {...others} />);
}

export default Component;
