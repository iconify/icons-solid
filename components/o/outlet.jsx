import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pi8645b3h.css';
import '../../css/r/rpjv5gb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pi8645b3h"/><path class="rpjv5gb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:outlet"} {...others} />);
}

export default Component;
