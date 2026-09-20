import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzgqy2toz.css';
import '../../css/u/uadr4mbak.css';
import '../../css/o/o35n15qhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nzgqy2toz"/><path class="uadr4mbak"/><path class="o35n15qhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-arc"} {...others} />);
}

export default Component;
