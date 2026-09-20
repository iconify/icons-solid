import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kle0w2bug.css';
import '../../css/k/kgf2ogbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kle0w2bug"/><path class="kgf2ogbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:emergency-bed"} {...others} />);
}

export default Component;
