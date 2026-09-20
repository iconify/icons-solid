import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bzanpxylq.css';
import '../../css/q/qdnrthbhb.css';
import '../../css/f/f6hdy3bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bzanpxylq"/><path class="qdnrthbhb"/><path class="f6hdy3bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:road-sign"} {...others} />);
}

export default Component;
