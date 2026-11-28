import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obrg_m8tk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c35fhsbht.css';
import '../../css/m/mbjtpbb8u.css';
import '../../css/o/o8hc6nb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obrg_m8tk secondary"/><g class="dt0cm9dhy primary"><path class="c35fhsbht"/><circle class="mbjtpbb8u"/><circle class="o8hc6nb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shopping-cart-duo"} {...others} />);
}

export default Component;
