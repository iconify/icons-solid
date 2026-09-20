import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cw00x95zz.css';
import '../../css/h/hf4medc5o.css';
import '../../css/n/npzbi206w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cw00x95zz"/><path class="hf4medc5o"/><circle class="npzbi206w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dessert"} {...others} />);
}

export default Component;
