import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egw0_e_yk.css';
import '../../css/g/grhwfqo-l.css';
import '../../css/u/uxmpfhdsy.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="egw0_e_yk"/><path class="grhwfqo-l"/><path class="uxmpfhdsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:product-classes-outlined"} {...others} />);
}

export default Component;
