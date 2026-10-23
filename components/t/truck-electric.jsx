import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv3zxeb_i.css';
import '../../css/k/kdpkh7bsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bv3zxeb_i"/><path class="kdpkh7bsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:truck-electric"} {...others} />);
}

export default Component;
