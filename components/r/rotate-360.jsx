import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cuww4ebyp.css';
import '../../css/u/ud96t5w0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cuww4ebyp"/><path class="ud96t5w0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rotate-360"} {...others} />);
}

export default Component;
