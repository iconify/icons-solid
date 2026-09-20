import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da_vrxyhp.css';
import '../../css/t/t407-ooiy.css';
import '../../css/s/sbx-7_3rt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="da_vrxyhp"/><path class="t407-ooiy"/><path class="sbx-7_3rt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-threejs"} {...others} />);
}

export default Component;
