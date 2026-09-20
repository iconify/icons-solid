import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f45t4_w_i.css';
import '../../css/k/k0i0ytbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f45t4_w_i"/><path class="k0i0ytbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-plus"} {...others} />);
}

export default Component;
