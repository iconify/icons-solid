import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-2fl5bvg.css';
import '../../css/l/lm8nfrbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m-2fl5bvg"/><path class="lm8nfrbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:air-balloon"} {...others} />);
}

export default Component;
