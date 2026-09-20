import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mu3ngubsu.css';
import '../../css/s/ssxz6hw6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mu3ngubsu"/><path class="ssxz6hw6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-vue"} {...others} />);
}

export default Component;
